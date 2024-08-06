import './assets/style.css'
import './assets/languages.css'
import 'boxicons'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from '@/i18n/i18n'
import VueWriter from "vue-writer";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(VueWriter)

app.mount('#app')
