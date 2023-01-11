import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
  ,
  {
    path: '/education',
    name: 'education',
    component: function () {
      return import('../views/EducationView.vue')
    }
  }
  ,
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import('../views/ContactView.vue')
    }
  },
  {
    path: '/skills',
    name: 'skills',
    component: function () {
      return import('../views/SkillsView.vue')
    }
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: function () {
      return import('../views//TestimonialsView.vue')
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: function () {
      return import('../views/ProjectsView.vue')
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
