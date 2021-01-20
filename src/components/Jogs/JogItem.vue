<template>
  <div class="jog-item">
    <img src="@/assets/images/jog-icon.png" />
    <div class="item-info">
      <span>{{ formattedDate }}</span>
      <span>{{ speed }}</span>
      <span>{{ distance }}</span>
      <span>{{ time }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "JogItem",
  props: {
    date: Number,
    speed: Number,
    distance: Number,
    time: Number,
  },
  setup(props: { date: any }) {
    const formattedDate = computed(() => {
      return new Date(props.date * 1000).toLocaleDateString();
    });
    return {
      formattedDate,
    };
  },
});
</script>
<style lang="less" scoped>
.jog-item {
  display: flex;
  &:hover {
    cursor: pointer;
  }
  .item-info {
    margin-left: 46px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
