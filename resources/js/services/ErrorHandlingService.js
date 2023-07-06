import router from '../components/router/router.js'

const ErrorHandlingService = {
    handle: async error => {
        switch (error.response.status) {
            case 401: {
                await router.push({name: 'auth.signin'})
                return { data: { error: error.response.data.error } }
            }
            case 422: {
                return { data: { error: error.response.data.message } }
            }
        }
    }
}

export {
    ErrorHandlingService
}
