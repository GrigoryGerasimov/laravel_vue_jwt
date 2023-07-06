import router from '../components/router/router.js'

const ErrorHandlingService = {
    log: async error => {
        if (error.response.status === 401) await router.push({ name: 'auth.signin' })
    }
}

export {
    ErrorHandlingService
}
