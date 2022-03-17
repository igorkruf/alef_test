import { createRouter, createWebHistory } from "vue-router";
import MyForm from "@/views/MyForm.vue";
import MyPrewie from "@/views/MyPrewie.vue";
const routes = [
  {
    path: "/",
    name: "Form",
    component: MyForm,
    meta: {
      title: "Форма",
    },
  },
  {
    path: "/prewie",
    name: "Preview",
    component: MyPrewie,
    meta: {
      title: "Превью",
    },
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
////////Меняем title страницы после перехода по роуту
const DEFAULT_TITLE = "Тест";
router.afterEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
