import TransactionView from '@/views/user/TransactionView.vue'
import KtrRequestView from '../views/user/KtrRequestView.vue'
import KtrRequestCreateView from '../views/user/KtrRequestCreateView.vue'
import PaymentConfirmView from '../views/user/PaymentConfirmView.vue'

export default [
  { path: '/user/transaction', component: TransactionView },
  { path: '/user/request', component: KtrRequestView },
  { path: '/user/request/create', component: KtrRequestCreateView },
  { path: '/user/payments/:id', component: PaymentConfirmView },
]