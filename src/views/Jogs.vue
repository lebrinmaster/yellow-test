<template>
  <div class="jogs">
    <div v-if="!addingForm">
      <JogsSubHeader />
      <JogItem
        v-for="item of jogs"
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
import { defineComponent, ref, onMounted, computed } from "vue";
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
    const openJogForm = () => {
      console.log("trigger");
      addingForm.value = true;
      console.log(jogs.value);
    };
    const getJogs = onMounted(() => {
      $store.dispatch("getjogs");
    });
    return {
      addingForm,
      openJogForm,
      getJogs,
      jogs,
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
