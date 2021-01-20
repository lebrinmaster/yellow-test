<template>
  <div class="jogs-subheader">
    <label for="dateFrom">Date from</label>
    <input
      type="date"
      id="dateFrom"
      pattern="\d{1,2}.\d{1,2}.\d{4}"
      v-model="dateFrom"
    />
    <label for="dateTo">Date to</label>
    <input
      type="date"
      id="dateTo"
      pattern="\d{1,2}.\d{1,2}.\d{4}"
      v-model="dateTo"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "JogsSubHeader",
  setup(_, { emit }) {
    const dateFrom = ref("");
    const dateTo = ref("");
    const dateToWatch = watch(dateTo, (newVal) => {
      console.log(newVal);
      emit("dateToChange", newVal);
    });
    const dateFromWatch = watch(dateFrom, (newVal) => {
      emit("dateFromChange", newVal);
    });
    return {
      dateTo,
      dateFrom,
      dateToWatch,
      dateFromWatch,
    };
  },
});
</script>
<style lang="less" scoped>
.jogs-subheader {
  display: flex;
  justify-content: center;
  background-color: #eaeaea;
  height: 100%;
  max-height: 60px;
  padding-top: 16px;
  padding-bottom: 13px;
}
</style>
