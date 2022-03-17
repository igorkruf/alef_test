<template>
  <q-list class="column listChidrens">
    <q-item
      v-for="(children, i) in childrens"
      :key="i"
      class="row items-center listChidrensItem justify-center q-mb-lg"
    >
      <div class="col-8 listChidrensItem__nameChild">
        {{ children.nameChild }}
      </div>
      <div class="col-2 listChidrensItem__ageChild">
        {{ children.ageChild }}
      </div>
      <div class="col-2 listChidrensItem__delChild">
        <q-btn
          label="Удалить"
          flat
          no-caps
          color="primary"
          @click="$emit('delChildren', i)"
        ></q-btn>
      </div>
    </q-item>
  </q-list>
</template>
<script>
export default {
  emits: ["delChildren"],
  props: {
    childrens: Array,
  },
};
</script>
<style lang="scss" scoped>
.listChidrensItem {
  border-bottom: 0px solid $gray_color;
}
.listChidrensItem__nameChild {
  position: relative;
  font-size: 16px;
  &::after {
    position: absolute;
    content: "Имя";
    top: -20px;
    left: 0px;
    font-size: 14px;
    color: $gray_color;
    width: 100%;
    height: 100%;
  }
}
.listChidrensItem__ageChild {
  position: relative;
  font-size: 18px;
  &::after {
    position: absolute;
    content: "Возраст";
    top: -20px;
    left: 0px;
    font-size: 14px;
    color: $gray_color;
    width: 100%;
    height: 100%;
  }
}
</style>