<template>
  <img src="@/assets/images/add.png" @click="openJogForm" />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddButton",
  setup() {
    const openJogForm = () => {
      console.log("open jog form");
    };
    return {
      openJogForm,
    };
  },
});
</script>
<style lang="less" scoped>
img {
  position: fixed;
  bottom: 40px;
  right: 40px;

  &:hover {
    cursor: pointer;
  }
}
</style>
