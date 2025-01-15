import PaymentView from '@/views/user/PaymentView.vue'
import KtrRequestView from '../views/user/KtrRequestView.vue'
import KtrRequestCreateView from '../views/user/KtrRequestCreateView.vue'
import PaymentConfirmView from '../views/user/PaymentConfirmView.vue'

export default [
  { path: '/user/payment', component: PaymentView },
  { path: '/user/request', component: KtrRequestView },
  { path: '/user/request/create', component: KtrRequestCreateView },
  { path: '/user/payments/:id', component: PaymentConfirmView },
]