const routes = [
    {
        path: '/',
        component: () => import('../Fruits/FruitsList.vue'),
        name: 'fruits.index'
    },
    {
        path: '/auth/signin',
        component: () => import('../Auth/Login.vue'),
        name: 'auth.signin'
    },
    {
        path: '/auth/signup',
        component: () => import('../Auth/Register.vue'),
        name: 'auth.signup'
    }
]

export {
    routes
}
