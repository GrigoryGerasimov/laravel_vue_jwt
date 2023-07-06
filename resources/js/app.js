import './bootstrap';
import { createApp } from 'vue'
import router from './components/router/router.js'
import VuexStore from './store'
import App from './components/App.vue'

const app = createApp({})

app
    .use(router)
    .use(VuexStore)
    .component('app', App)
    .mount('#app')
