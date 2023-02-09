import 'uno.css'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
