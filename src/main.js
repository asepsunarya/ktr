import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import './style.css' // Import Tailwind CSS

createApp(App).use(router).mount('#app')
