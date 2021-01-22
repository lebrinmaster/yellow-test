<template>
  <div class="jog-item" :class="{ mobile: isMobile }">
    <img src="@/assets/images/jog-icon.png" />
    <div class="item-info">
      <span>{{ formattedDate }}</span>
      <span>Speed: {{ speed }}</span>
      <span>Distance: {{ distance }}</span>
      <span>Date: {{ time }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "JogItem",
  props: {
    date: Number,
    speed: Number,
    distance: Number,
    time: Number,
  },
  setup(props: { date: any }) {
    const $store = useStore();
    const formattedDate = computed(() => {
      return new Date(props.date * 1000).toLocaleDateString();
    });
    const isMobile = computed(() => $store.getters.getWindowSize);
    return {
      formattedDate,
      isMobile,
    };
  },
});
</script>
<style lang="less" scoped>
.jog-item {
  display: flex;
  margin-top: 53px;
  &:hover {
    cursor: pointer;
  }
  .item-info {
    margin-left: 46px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &.mobile {
    margin-top: 0;
    padding: 52px 0;
    border-bottom: 1px solid rgb(215 215 215);
  }
}
</style>
