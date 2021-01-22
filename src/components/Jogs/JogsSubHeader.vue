<template>
  <div class="jogs-subheader" :class="{ mobile: isMobile }">
    <div>
      <label for="dateFrom">Date from</label>
      <input
        type="date"
        id="dateFrom"
        pattern="\d{1,2}.\d{1,2}.\d{4}"
        v-model="dateFrom"
      />
    </div>
    <div>
      <label for="dateTo">Date to</label>
      <input
        type="date"
        id="dateTo"
        pattern="\d{1,2}.\d{1,2}.\d{4}"
        v-model="dateTo"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "JogsSubHeader",
  setup(_, { emit }) {
    const $store = useStore();
    const isMobile = computed(() => $store.getters.getWindowSize);
    const dateFrom = ref("");
    const dateTo = ref("");
    const dateToWatch = watch(dateTo, (newVal) => {
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
      isMobile,
    };
  },
});
</script>
<style lang="less" scoped>
.jogs-subheader {
  display: flex;
  justify-content: space-evenly;
  background-color: #eaeaea;
  height: 100%;
  max-height: 60px;
  padding-top: 16px;
  padding-bottom: 13px;
  &.mobile {
    justify-content: space-evenly;
    padding: 13px 0;
    input {
      max-width: 72px;
    }
  }
}
</style>
