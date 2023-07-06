import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'
import { TokenService, JWT } from '../../services/TokenService.js'

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(to => {
    if (to.name === 'auth.signin' || to.name === 'auth.signup') {
        if (TokenService.read()[JWT.ACCESS_TOKEN]) return {name: 'fruits.index'}
    }
})

export default router
