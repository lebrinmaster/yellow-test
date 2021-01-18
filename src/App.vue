<template>
  <Navbar />
  <router-view />
</template>
<script lang="ts">
import Navbar from "@/components/Navbar/Navbar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Navbar,
  },
});
</script>
<style lang="less" scoped>
body {
  margin: 0;
  padding: 0;
}
</style>
