import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CourseView from '../views/CourseView.vue';
import SequenceView from '../views/SequenceView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/courses',
      name: 'courses',
      component: CourseView
    },
    {
      path: '/sequence',
      name: 'sequence',
      component: SequenceView
    }
  ]
})

export default router
