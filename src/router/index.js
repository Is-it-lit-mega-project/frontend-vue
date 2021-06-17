import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/characters",
    name: "Characters",
    component: function () {
      return import("../views/Characters.vue");
    },
  },
  {
    path: "/parties",
    name: "Parties",
    component: function () {
      return import("../views/Parties.vue");
    },
  },
  {
    path: "/quests",
    name: "Quests",
    component: function () {
      return import("../views/Quests.vue");
    },
  },
  {
    path: "/relationships",
    name: "Relationships",
    component: function () {
      return import("../views/Relationships.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
