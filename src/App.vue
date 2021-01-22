<template>
  <Navbar v-if="!isMobileMenuOpened" />
  <MobileMenu v-else />
  <router-view />
</template>
<script lang="ts">
import Navbar from "@/components/Navbar/Navbar.vue";
import MobileMenu from "@/components/Navbar/MobileMenu.vue";
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Navbar,
    MobileMenu,
  },
  setup() {
    const $store = useStore();
    const isMobileMenuOpened = computed(
      () => $store.getters.getMobileMenuState
    );
    const checkWindowSize = onMounted(() => $store.commit("checkWindowSize"));
    return {
      checkWindowSize,
      isMobileMenuOpened,
    };
  },
});
</script>
