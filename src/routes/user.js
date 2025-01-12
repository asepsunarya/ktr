import DashboardView from '@/views/user/DashboardView.vue'
import KtrRequestView from '../views/user/KtrRequestView.vue'

export default [
  { path: '/user/dashboard', component: DashboardView },
  { path: '/user/request', component: KtrRequestView },
]