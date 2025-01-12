import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import './style.css' // Import Tailwind CSS
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(router).use(LoadingPlugin).use(VueSweetalert2).mount('#app')
