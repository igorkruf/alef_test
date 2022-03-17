<template>
  <header class="header">
    <nav class="nav nav-header">
      <router-link :to="{ name: 'Form' }" class="nav__routerlink"
        >Форма</router-link
      >
      <router-link :to="{ name: 'Preview' }" class="nav__routerlink"
        >Превью</router-link
      >
    </nav>
  </header>

  <main class="main">
    <section class="section-content">
      <router-view></router-view>
    </section>
  </main>
  <footer class="footer row justify-center">
    <div>all right reserved</div>
  </footer>
</template>

<script>
export default {
  name: "LayoutDefault",
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>
<style lang="scss">
#app {
  height: 100vh;
  display: grid;
  font-family: "OpenSans-Regular";
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 100px;
}
.header {
  display: grid;
  border-bottom: 1px solid $gray_color;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
}
.nav-header {
  padding: 10px;
  display: grid;
  grid-template-columns: auto auto;
  align-content: center;
  grid-column-gap: 30px;
}
.nav__routerlink {
  text-decoration: none;
  color: $gray_color;
  font-size: 16px;
  &:hover {
    color: $accent_color;
  }
}
// .nav__routerlink-active {
//   color: $accent_color;
// }
.router-link-active {
  color: $accent_color;
  cursor: default;
}
.main {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
.section-content {
  width: 100vw;
  max-width: 800px;
}
.form {
  padding: 20px;
}
.persdan__title {
  font-size: 18px;
  margin: 20px 0px;
}
</style>
