<template>
  <section class="form">
    <div class="row">
      <div class="persdan__title">Персональные данные</div>
    </div>
    <div class="q-gutter-y-md">
      <q-input v-model="imyaUser" outlined label="Имя" color="dark" />
      <q-input
        v-model="ageUser"
        outlined
        label="Возраст"
        color="dark"
        mask="###"
      />
    </div>
  </section>
  <section class="form">
    <div class="row justify-between q-mb-md items-center">
      <div class="persdan__title">Дети(макс.5)</div>
      <q-btn
        v-if="enableAddChildren"
        icon="add"
        label="Добавить ребёнка"
        rounded
        no-caps
        outline
        color="primary"
        @click="form_add_children = true"
      ></q-btn>
    </div>
    <list-children
      :childrens="childrenArray"
      @delChildren="del_children"
    ></list-children>
    <q-btn
      padding="10px 20px"
      rounded
      size="14px"
      label="Сохранить"
      color="primary"
      class="save-persdan__btn q-mt-lg"
      no-caps
      @click="set_user_local"
    />
  </section>
  <q-dialog v-model="form_add_children">
    <form-add-children @add_children="add_children"></form-add-children>
  </q-dialog>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import FormAddChildren from "@/components/FormAddChildren.vue";
import ListChildren from "@/components/ListChildren.vue";

export default {
  data() {
    return {
      imyaUser: "",
      ageUser: null,
      enableAddChildren: true,
      childrenArray: [],
      form_add_children: false,
      user: null,
    };
  },
  computed: { ...mapGetters("User", { get_user: "get_user" }) },
  methods: {
    ...mapActions("User", { set_user: "set_user", del_user: "del_user" }),
    add_children(child) {
      if (this.childrenArray.length < 5) {
        //Удаляем нули если они в начале возраста
        child.ageChild = child.ageChild.replace(/^0+/, "");
        this.childrenArray.push(child);
        console.log(this.childrenArray);
        this.form_add_children = false;
        if (this.childrenArray.length == 5) {
          this.enableAddChildren = false;
        }
      }
    },
    del_children(i) {
      console.log(`Удаляем ребенка по счёту: ${i}`);
      console.log(typeof this.childrenArray[i].ageChild);
      this.childrenArray.splice(i, 1);
      if (this.childrenArray.length < 5) {
        this.enableAddChildren = true;
      }
    },
    set_user_local() {
      if (
        this.ageUser !== null &&
        this.ageUser !== "" &&
        this.imyaUser.length > 0
      ) {
        //Удаляем нули если они в начале возраста
        this.ageUser = this.ageUser.replace(/^0+/, "");
        this.user = { imya: this.imyaUser, age: this.ageUser };
        this.user.children = this.childrenArray;
        console.log(this.user);
        this.set_user(this.user);
        document
          .querySelector(".save-persdan__btn")
          .classList.add("added_persdan");

        setTimeout(function () {
          document
            .querySelector(".save-persdan__btn")
            .classList.remove("added_persdan");
        }, 2000);
        this.ageUser = null;
        this.imyaUser = "";
      } else {
        document
          .querySelector(".save-persdan__btn")
          .classList.add("error_persdan");

        setTimeout(function () {
          document
            .querySelector(".save-persdan__btn")
            .classList.remove("error_persdan");
        }, 2000);
      }
    },
  },
  mounted() {
    this.del_user();
  },
  components: {
    FormAddChildren,
    ListChildren,
  },
};
</script>
<style lang="scss">
.added_persdan {
  &::after {
    position: absolute;
    content: "Данные сохранены!";
    bottom: -30px;
    left: 10px;
    width: 200px;
    color: green;
  }
}
.error_persdan {
  &::after {
    position: absolute;
    content: "Проверь введённые данные!";
    bottom: -30px;
    left: 10px;
    width: 200px;
    color: red;
  }
}
</style>