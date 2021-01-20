<template>
  <div class="toolbar">
    <div v-for="item of menuItems" :key="item">
      <router-link class="menu-item" :to="item.route">
        {{ item.title }}
      </router-link>
    </div>
    <FilterToggle />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FilterToggle from "./FilterToggle.vue";

export default defineComponent({
  name: "Toolbar",
  components: {
    FilterToggle,
  },
  setup() {
    const menuItems = [
      { title: "jogs", route: "/" },
      { title: "info", route: "/info" },
      { title: "contact us", route: "/contact-us" },
    ];
    return {
      menuItems,
    };
  },
});
</script>
<style lang="less" scoped>
.toolbar {
  display: flex;
  align-items: center;
  .menu-item {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 46px;
    text-transform: uppercase;
  }
}
</style>
