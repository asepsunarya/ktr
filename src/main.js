import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import './style.css' // Import Tailwind CSS
import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueSignaturePad from 'vue-signature-pad'

createApp(App).use(router).use(LoadingPlugin).use(VueSweetalert2).use(VueSignaturePad).mount('#app')
