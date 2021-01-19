<template>
  <div class="jogs-subheader">
    <label for="dateFrom">Date from</label>
    <input id="dateFrom" />
    <label for="dateTo">Date to</label>
    <input id="dateTo" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "JogsSubHeader",
});
</script>
<style lang="less" scoped>
.jogs-subheader {
  display: flex;
  justify-content: center;
  background-color: #eaeaea;
  height: 100%;
  max-height: 60px;
  padding-top: 16px;
  padding-bottom: 13px;
}
</style>
