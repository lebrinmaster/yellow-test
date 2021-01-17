<template>
  <p>{{ test }}</p>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const test = computed((): string => "test computed property");
    return {
      test,
    };
  },
});
</script>

<style lang="less" scoped></style>
