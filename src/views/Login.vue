<template>
  <div class="auth-wrapper">
    <div class="login-form">
      <img src="@/assets/images/bear-face.png" />
      <button @click="logIn">Let me in</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import axios from "axios";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const router = useRouter();
    const $store = useStore();
    const logIn = () => {
      $store.dispatch("logIn").then(() => router.push("/"));
    };
    return {
      logIn,
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
  height: 100%;

  .login-form {
    display: flex;
    flex-direction: column;
    background-color: #e990f9;
    border-radius: 44px;
  }
}
</style>
