import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import DashboardView from '@/views/user/DashboardView.vue'
import KtrRequestView from '../views/user/KtrRequestView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },

  // user routes
  { path: '/user/dashboard', component: DashboardView },
  { path: '/user/request', component: KtrRequestView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router