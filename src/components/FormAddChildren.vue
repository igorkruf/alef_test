<template>
  <q-card class="dialog-medium">
    <q-card-section class="row justify-end"
      ><q-btn
        rounded
        flat
        icon="close"
        size="20px"
        class="q-pa-sm"
        v-close-popup
    /></q-card-section>
    <q-card-section
      class="form-addchildren row q-mb-md justify-between items-center"
    >
      <q-input
        v-model="nameChild"
        outlined
        label="Имя"
        color="dark"
        class="col-8"
        @update:model-value="validate"
      />
      <q-input
        v-model="ageChild"
        outlined
        mask="##"
        label="Возраст"
        color="dark"
        class="col-3"
        @update:model-value="validate"
      />
    </q-card-section>
    <q-card-actions align="right" class="actions actions-hidden text-primary">
      <q-btn flat label="Отмена" color="primary" v-close-popup no-caps />
      <q-btn
        type="submit"
        flat
        label="Сохранить"
        color="primary"
        no-caps
        @click="
          $emit('add_children', { ageChild: ageChild, nameChild: nameChild })
        "
      />
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
  emits: ["add_children"],
  data() {
    return {
      submit: false,
      ageChild: null,
      nameChild: "",
    };
  },
  methods: {
    validate() {
      if (
        this.ageChild !== null &&
        this.ageChild !== "" &&
        this.nameChild.length > 0
      ) {
        document.querySelector(".actions").classList.remove("actions-hidden");
      } else {
        document.querySelector(".actions").classList.add("actions-hidden");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.dialog-medium {
  width: 700px;
  max-width: 80vw;
  padding: 50px;
}
.actions {
  visibility: visible;
}
.actions-hidden {
  visibility: hidden;
}
</style>