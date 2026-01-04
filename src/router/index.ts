import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import NotFound from '../pages/NotFound.vue';
import ErrorTest from '../pages/ErrorTest.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/error-test', name: 'ErrorTest', component: ErrorTest },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;