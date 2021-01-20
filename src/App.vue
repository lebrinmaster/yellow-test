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
