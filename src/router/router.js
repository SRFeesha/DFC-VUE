import VueRouter from "vue-router";
import Home from "../components/Home";
import Schedule from "../components/Schedule";
import Meetup from "../components/Meetup";
import FreaksBoard from "../components/FreaksBoard";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule
  },
  {
    path: "/meetup",
    name: "Meetup",
    component: Meetup
  },
  {
    path: "/freaksboard",
    name: "FreaksBoard",
    component: FreaksBoard
  }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

export default router;
