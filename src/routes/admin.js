import DashboardView from '../views/admin/DashboardView.vue'
import KtrRequestView from '../views/admin/KtrRequestView.vue'
import ProfileView from '../views/admin/ProfileView.vue'
import SettingView from '../views/admin/SettingView.vue'

export default [
  { path: '/admin/dashboard', component: DashboardView },
  { path: '/admin/request', component: KtrRequestView },
  { path: '/admin/settings', component: SettingView },
  { path: '/admin/profile', component: ProfileView },
]