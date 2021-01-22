<template>
  <img
    src="@/assets/images/add.png"
    @click="openJogForm"
    :height="buttonSize"
    :width="buttonSize"
  />
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "AddButton",
  setup() {
    const $store = useStore();
    const isMobile = computed(() => $store.getters.getWindowSize);
    const buttonSize = computed(() => (isMobile.value ? 47 : 60));
    return {
      isMobile,
      buttonSize,
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
