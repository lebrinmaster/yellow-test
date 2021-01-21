<template>
  <div class="jog-form-wrapper">
    <div class="jog-form">
      <i class="close-button" @click="closeJogsForm">X</i>
      <form class="form" @submit="onSubmit">
        <div class="form-input">
          <label for="distance">Distance</label>
          <input id="distance" v-model="jogFormData.distance" name="distance" />
        </div>
        <p v-if="distance.error">{{ distance.error.message }}</p>
        <div class="form-input">
          <label for="time">Time</label>
          <input id="time" v-model="jogFormData.time" name="time" />
        </div>
        <p v-if="time.error">
          {{ time.error.message }}
        </p>
        <div class="form-input">
          <label for="date">Date</label>
          <input id="date" type="date" v-model="jogFormData.date" name="date" />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { useForm } from "vue-hooks-form";

export default defineComponent({
  name: "JogForm",
  setup() {
    const $store = useStore();
    const { useField, handleSubmit } = useForm({
      defaultValues: {},
    });
    const forUpdate = computed(() => $store.getters.jogFormCondition);
    const user = computed(() => $store.getters.user);
    const distance = useField("distance", {
      rule: {
        required: false,
        pattern: "[0-9]+",
      },
    });
    const time = useField("time", {
      rule: {
        required: false,
        pattern: "[0-9]+",
      },
    });
    const date = useField("date", {
      rule: {
        required: false,
        type: "string",
      },
    });
    const jogFormData = computed(() => $store.getters.jogsFormData);
    const closeJogsForm = () => {
      $store.commit("toggleJogsFormState", false);
      $store.commit("setJogsForm", { distance: null, time: null, date: null });
    };
    const onSubmit = (data: any) => {
      if (!forUpdate.value) {
        const payload = {
          date: jogFormData.value.date,
          time: jogFormData.value.time,
          distance: jogFormData.value.distance,
        };
        console.log(payload);
        $store
          .dispatch("postNewJogItem", payload)
          .then(() => $store.commit("setJogsForm", null))
          .finally(() => $store.commit("toggleJogsFormState", false));
      } else {
        console.log(user);
        const payload = {
          date: jogFormData.value.date,
          time: jogFormData.value.time,
          distance: jogFormData.value.distance,
          jog_id: jogFormData.value.id /* eslint-disable-line */,
          user_id: user.value.id /* eslint-disable-line */,
        };
        console.log(payload);
        $store
          .dispatch("updateJogItem", payload)
          .then(() => $store.dispatch("getJogs"))
          .then(() => $store.commit("setJogsForm", null))
          .finally(() => $store.commit("toggleJogsFormState", false));
      }
    };
    return {
      distance,
      time,
      date,
      closeJogsForm,
      onSubmit: handleSubmit(onSubmit),
      jogFormData,
      forUpdate,
      user,
    };
  },
});
</script>
<style lang="less" scoped>
.jog-form-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 116px);
  .jog-form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-radius: 44px;
    background-color: #7ed321;
    .close-button {
      padding: 27px;
      color: white;
      font-weight: black;
      &:hover {
        cursor: pointer;
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      padding: 47px 88px;
      padding: 47px 88px;
      padding-top: 0;
      .form-input {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
        label {
          margin-right: 16px;
        }
        input {
          width: 236px;
        }
      }
    }
  }
}
</style>
