// TODO: Import duplicato: c'è anche in store
// occhio a toglierlo
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Schedule from '../views/Schedule';
import Meetup from '../views/Meetup';
import FreaksBoard from '../views/FreaksBoard';

const scrollBehavior = function(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/meetup',
    name: 'Meetup',
    component: Meetup
  },
  {
    path: '/freaksboard',
    name: 'FreaksBoard',
    component: FreaksBoard
  }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior
});

export default router;
