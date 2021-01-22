<template>
  <div class="jogs">
    <div v-if="!addingForm">
      <JogsSubHeader
        v-show="datePanelState"
        @dateToChange="handleDateToChange"
        @dateFromChange="handleDateFromChange"
      />
      <JogItem
        v-for="item of formattedJogs"
        :key="item.id"
        class="jog-item"
        :date="item.date"
        :speed="15"
        :distance="item.distance"
        :time="item.time"
        @click="openJogForm(item, item.id)"
      />
      <AddButton @click="openJogForm(null)" />
    </div>
    <JogForm v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed, reactive } from "vue";
import { useStore } from "vuex";

import JogsSubHeader from "../components/Jogs/JogsSubHeader.vue";
import JogItem from "../components/Jogs/JogItem.vue";
import JogForm from "../components/Jogs/JogForm.vue";
import AddButton from "@/common/AddButton.vue";

export default defineComponent({
  name: "JogsPage",
  components: {
    JogsSubHeader,
    JogItem,
    AddButton,
    JogForm,
  },
  setup() {
    const $store = useStore();
    const addingForm = computed(() => $store.getters.jogsFormState);
    const jogs = computed(() => $store.getters.allJogs);
    const datePanelState = computed(() => $store.getters.datePanelState);
    const dates = ref([]);
    const dateCondition: {
      dateFrom: number;
      dateTo: number;
    } = reactive({ dateFrom: 0, dateTo: Date.now() });
    const openJogForm = (data: any, id?: number) => {
      $store.commit("toggleJogsFormState", true);
      if (id) {
        $store.commit("setJogsForm", {
          distance: data.distance,
          time: data.time,
          date: data.date,
          id: id,
        });
        $store.commit("setJogFormCondition", true);
      } else {
        $store.commit("setJogsForm", {
          distance: null,
          time: null,
          date: null,
          id: null,
        });
        $store.commit("setJogFormCondition", false);
      }
    };
    const getJogs = onMounted(() => {
      $store.dispatch("getJogs");
    });

    const formattedJogs = computed(() => $store.getters.formattedJogs);
    const isMobile = computed(() => $store.getters.getWindowSize);

    const handleDateToChange = (data: any) => {
      dateCondition.dateTo = Date.parse(data);
      $store.commit("setFormattedJogs", dateCondition);
    };
    const handleDateFromChange = (data: any) => {
      dateCondition.dateFrom = Date.parse(data);
      $store.commit("setFormattedJogs", dateCondition);
    };
    return {
      addingForm,
      openJogForm,
      datePanelState,
      getJogs,
      jogs,
      handleDateToChange,
      handleDateFromChange,
      formattedJogs,
      isMobile,
    };
  },
});
</script>
<style lang="less" scoped>
.jogs {
  .jog-item {
    display: flex;
    justify-content: center;
  }
}
</style>
