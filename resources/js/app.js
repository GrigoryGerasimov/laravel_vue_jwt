import './bootstrap';
import { createApp } from 'vue'
import router from './components/router/router.js'
import App from './components/App.vue'

const app = createApp({})

app
    .use(router)
    .component('app', App)
    .mount('#app')
