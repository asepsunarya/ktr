import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import LoginAdminView from '@/views/LoginAdminView.vue'
import RegisterView from '@/views/RegisterView.vue'
import UserRoutes from './user'
import AdminRoutes from './admin'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/login/admin', component: LoginAdminView },
  { path: '/register', component: RegisterView },

  ...UserRoutes,
  ...AdminRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router