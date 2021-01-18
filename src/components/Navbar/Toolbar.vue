<template>
  <div class="toolbar">
    <a class="menu-item" v-for="item of menuItems" :key="item">{{ item }}</a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Toolbar",
  setup() {
    const menuItems = ["jogs", "info", "contact us"];
    return {
      menuItems,
    };
  },
});
</script>
<style lang="less" scoped>
.toolbar {
  height: 100%;
  .menu-item {
    margin-right: 46px;
  }
}
</style>
