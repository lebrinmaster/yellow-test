<template>
  <div class="auth-wrapper">
    <div class="login-form" v-if="!isMobile">
      <img src="@/assets/images/bear-face.png" />
      <button @click="logIn">Let me in</button>
    </div>
    <div class="mobile-wrapper" v-else>
      <img src="@/assets/images/bear-face-mobile.png" />
      <button @click="logIn">Let me in</button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const $store = useStore();
    const isMobile = computed(() => $store.getters.getWindowSize);
    const logIn = () => {
      $store.dispatch("logIn");
    };
    return {
      logIn,
      isMobile,
    };
  },
});
</script>

<style lang="less" scoped>
.auth-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100% - 116px);

  .login-form {
    display: flex;
    flex-direction: column;
    background-color: #e990f9;
    border-radius: 44px;
    padding: 30px 170px;
    button {
      margin-top: 56px;
    }
  }
  .mobile-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100%;
  }
}
</style>
