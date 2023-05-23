import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import router from './router'
import store from './store'
import "normalize.css"
import { createHead } from '@vueuse/head'
const head = createHead()



createApp(App).use(store).use(head).use(router).mount('#app')
