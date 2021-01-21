<template>
  <div class="filter-toggle">
    <img
      v-show="!datePanelState"
      src="@/assets/images/filter-active.png"
      @click="toggleDatePanel(true)"
    />
    <img
      v-show="datePanelState"
      src="@/assets/images/filter.png"
      @click="toggleDatePanel(false)"
    />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "FilterToggle",
  setup() {
    const $store = useStore();
    const datePanelState = computed(() => $store.getters.datePanelState);
    const jogsFormState = computed(() => $store.getters.jogsFormState);
    const toggleDatePanel = (state: boolean) => {
      if (!jogsFormState.value) {
        $store.commit("setDatePanelState", state);
      }
    };
    return {
      datePanelState,
      toggleDatePanel,
    };
  },
});
</script>
<style lang="less" scoped>
.filter-toggle {
  &:hover {
    cursor: pointer;
  }
}
</style>
