<template>
  <div class="navbar">
    <router-link :to="'/'">
      <img src="@/assets/images/logo.png" />
    </router-link>
    <Toolbar />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Toolbar from "./Toolbar.vue";

export default defineComponent({
  name: "Navbar",
  components: {
    Toolbar,
  },
  //   setup() {},
});
</script>
<style lang="less" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  background-color: #7ed321;
  max-height: 116px;
  padding: 30px 37px;
}
</style>
