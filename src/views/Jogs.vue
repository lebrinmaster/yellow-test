<template>
  <div class="jogs">
    <div v-if="!addingForm">
      <JogsSubHeader
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
      />
      <AddButton @click="openJogForm" />
    </div>
    <AddJogForm v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed, reactive } from "vue";
import { useStore } from "vuex";

import JogsSubHeader from "../components/Jogs/JogsSubHeader.vue";
import JogItem from "../components/Jogs/JogItem.vue";
import AddJogForm from "../components/Jogs/AddJogForm.vue";
import AddButton from "@/common/AddButton.vue";

export default defineComponent({
  name: "JogsPage",
  components: {
    JogsSubHeader,
    JogItem,
    AddButton,
    AddJogForm,
  },
  setup() {
    const $store = useStore();
    const addingForm = ref(false);
    const jogs = computed(() => $store.getters.allJogs);
    const dates = ref([]);
    const dateCondition: {
      dateFrom: number;
      dateTo: number;
    } = reactive({ dateFrom: 0, dateTo: Date.now() });
    const openJogForm = () => {
      addingForm.value = true;
    };
    const getJogs = onMounted(() => {
      $store.dispatch("getjogs");
    });

    const formattedJogs = computed(() => $store.getters.formattedJogs);

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
      getJogs,
      jogs,
      handleDateToChange,
      handleDateFromChange,
      formattedJogs,
    };
  },
});
</script>
<style lang="less" scoped>
.jogs {
  .jog-item {
    display: flex;
    justify-content: center;
    margin-top: 53px;
  }
}
</style>
