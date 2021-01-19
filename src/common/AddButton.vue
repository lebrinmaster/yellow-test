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
  position: absolute;
  padding: 40px;
  bottom: 0;
  right: 0;

  &:hover {
    cursor: pointer;
  }
}
</style>
