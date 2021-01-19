<template>
  <div class="jog-item">
    <img src="@/assets/images/jog-icon.png" />
    <div class="item-info">
      <span>{{ date }}</span>
      <span>{{ speed }}</span>
      <span>{{ distance }}</span>
      <span>{{ time }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "JogItem",
  props: {
    date: String,
    speed: String,
    distance: String,
    time: String,
  },
});
</script>
<style lang="less" scoped>
.jog-item {
  display: flex;
  .item-info {
    margin-left: 46px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
