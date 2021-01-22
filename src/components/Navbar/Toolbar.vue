<template>
  <div class="toolbar">
    <div v-if="!isMobile">
      <div v-for="item of menuItems" :key="item">
        <router-link class="menu-item" :to="item.route">
          {{ item.title }}
        </router-link>
      </div>
      <FilterToggle v-if="isAuthenticated" />
    </div>
    <div v-else class="mobile-navbar">
      <FilterToggle class="filter-toggle" v-if="isMobile && isAuthenticated" />
      <img src="@/assets/images/menu.png" @click="openMobileMenu" />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
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
    const $store = useStore();
    const mobileMenuOpened = ref(false);
    const isMobile = computed(() => $store.getters.getWindowSize);
    const isAuthenticated = computed(() => $store.getters.getAuth);
    const openMobileMenu = () => $store.commit("toggleMobileMenu", true);
    return {
      menuItems,
      isMobile,
      isAuthenticated,
      openMobileMenu,
      mobileMenuOpened,
    };
  },
});
</script>
<style lang="less" scoped>
.toolbar {
  display: flex;
  align-items: center;
  & > div {
    display: flex;
  }

  .menu-item {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 46px;
    text-transform: uppercase;
  }
}
.mobile-navbar,
.filter-toggle {
  display: flex;
  align-items: center;
}
.filter-toggle {
  margin-right: 39px;
}
</style>
