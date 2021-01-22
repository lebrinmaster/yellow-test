<template>
  <div class="mobile-menu">
    <div class="wrapper">
      <router-link :to="'/'">
        <img src="@/assets/images/logo-green.png" />
      </router-link>
      <router-link :to="'/'">
        X
      </router-link>
    </div>
    <div class="menu-items-wrapper">
      <div class="menu-items">
        <router-link :to="'/'" class="link" @click="closeMobileMenu">
          Jogs
        </router-link>
        <router-link :to="'/info'" class="link" @click="closeMobileMenu">
          Info
        </router-link>
        <router-link :to="'/contact-us'" class="link" @click="closeMobileMenu">
          Contact us
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "MobileMenu",
  setup() {
    const $store = useStore();
    const closeMobileMenu = () => $store.commit("toggleMobileMenu", false);
    return {
      closeMobileMenu,
    };
  },
});
</script>
<style lang="less" scoped>
.mobile-menu {
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 2;
  .wrapper {
    display: flex;
    padding: 20px 25px;
    align-items: center;
    justify-content: space-between;
  }
  .menu-items-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100% - 81px);
    .menu-items {
      display: flex;
      flex-direction: column;
      font-size: 25px;
      font-weight: bold;
      .link {
        margin-bottom: 25px;
        text-decoration: none;
      }
    }
  }
}
</style>
