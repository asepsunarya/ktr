import PaymentView from '../views/admin/PaymentView.vue'
import KtrRequestView from '../views/admin/KtrRequestView.vue'
import KtrRequestDetailView from '../views/admin/KtrRequestDetailView.vue'
import KtrRequestPrintView from '../views/admin/KtrRequestPrintView.vue'
import KtrRequestEditView from '../views/admin/KtrRequestEditView.vue'
import ProfileView from '../views/admin/ProfileView.vue'
import SettingView from '../views/admin/SettingView.vue'

export default [
  { path: '/admin/request', component: KtrRequestView },
  { path: '/admin/request/:id', component: KtrRequestDetailView },
  { path: '/admin/request/print/:id', component: KtrRequestPrintView },
  { path: '/admin/request/edit/:id', component: KtrRequestEditView },
  { path: '/admin/payment', component: PaymentView },
  { path: '/admin/settings', component: SettingView },
  { path: '/admin/profile', component: ProfileView },
]