import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: "/",
      name: "home",
      component: HomeView,
    },
    */
    {
      path: "/contador",
      name: "contador",
      component: () => import("../modules/contador/components/Contador.vue"),
    }, 
    {
      path: "lista-de-tareas",
      name: "Listadetareas",
      component: () => import("../modules/Listadetareas/components/Listadetareas.vue"),
    }, 
    {
      path: "registrar",
      name: "registrar",
      component: () => import("../modules/registro/views/RegistrarView.vue"),
    }, 
  ],
});

export default router;
