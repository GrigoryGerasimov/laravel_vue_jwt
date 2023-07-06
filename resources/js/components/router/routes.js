const routes = [
    {
        path: '/',
        component: () => import('../Fruits/FruitsList.vue'),
        name: 'fruits.index'
    },
    {
        path: '/auth/signin',
        component: () => import('../Auth/SignIn.vue'),
        name: 'auth.signin'
    },
    {
        path: '/auth/signup',
        component: () => import('../Auth/SignUp.vue'),
        name: 'auth.signup'
    },
    {
        path: '/:pathMatch(.*)',
        component: () => import('../Common/404.vue'),
        name: 'pagenotfound'
    }
]

export {
    routes
}
