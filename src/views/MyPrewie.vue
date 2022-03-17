<template>
  <section v-if="saveduser">
    <section class="persdan">
      <div class="persdan__title">Персональные данные</div>
      <div class="persdan__out">{{ user.imya }}, {{ user.age }} лет</div>
    </section>
    <section class="persdan">
      <div class="persdan__title">Дети</div>
      <div
        class="persdan__out persdan__out-child"
        v-for="(children, i) in user.children"
        :key="i"
      >
        {{ children.nameChild }}, {{ children.ageChild }} лет
      </div>
    </section>
  </section>
  <section v-else class="persdan persdan-error">
    Нет сохраненных данных!!!
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      saveduser: false,
    };
  },
  computed: { ...mapGetters("User", { user: "get_user" }) },
  mounted() {
    if (this.user != null) {
      this.saveduser = true;
    }
  },
};
</script>
<style lang="scss" scoped>
.persdan {
  margin: 40px 0px;
}
.persdan__title {
  font-size: 18px;
  margin: 20px 0px;
}
.persdan__out {
  font-family: "OpenSans-Bold";
  font-size: 20px;
  margin-bottom: 20px;
}
.persdan__out-child {
  margin-left: 20px;
}
.persdan-error {
  color: red;
}
</style>