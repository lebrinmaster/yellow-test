<template>
  <div class="jogs">
    <div v-if="!addingForm">
      <JogsSubHeader />
      <JogItem
        v-for="item of 4"
        :key="item"
        class="jog-item"
        :date="'20.12.2021'"
        :speed="15"
        :distance="'10 km'"
        :time="'60 min'"
      />
      <AddButton @click="openJogForm" />
    </div>
    <AddJogForm v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
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
    const addingForm = ref(false);
    const openJogForm = () => {
      console.log("trigger");
      addingForm.value = true;
    };
    return {
      addingForm,
      openJogForm,
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
