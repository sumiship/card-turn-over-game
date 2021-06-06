import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Game from "../views/Game.vue";
import Endless30 from "../views/Endless30.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/game/:gameId",
    name: "Game",
    component: Game,
    props: true,
  },
  {
    path: "/endless30",
    name: "Endless30",
    component: Endless30,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
