import { ApiService } from '../../services/ApiService.js'
import { TokenService } from '../../services/TokenService.js'
import router from '../../components/router/router.js'

export default {
    state: {
        signInEmail: null,
        signInPassword: null,
        signInError: null
    },

    getters: {
        signInEmail: state => state.signInEmail,
        signInPassword: state => state.signInPassword,
        signInError: state => state.signInError
    },

    actions: {
        handleSignInData: ({ state, commit, dispatch }, data) => {
            commit('setSignInEmail', data)
            commit('setSignInPassword', data)
        },

        handleSignInSubmit: async ({ state, commit, dispatch }, data) => {
            dispatch('handleSignInData', data)

            try {
                const signInData = await ApiService.send('/api/auth/login', {
                    'email': state.signInEmail,
                    'password': state.signInPassword
                })
                if (signInData['access_token']) TokenService.store(signInData)
                if (signInData['error']) throw new Error(signInData['error'])
                router.replace({ name: 'fruits.index' })
            } catch (error) {
                dispatch('handleSignInError', error.message)
            }
        },

        handleSignInError: ({ state, commit, dispatch }, data) => {
            commit('setSignInError', data)
            setTimeout(() => commit('clearSignInError'), 3000)
        }
    },

    mutations: {
        setSignInEmail: (state, { email }) => {
            state.signInEmail = email
        },

        setSignInPassword: (state, { password }) => {
            state.signInPassword = password
        },

        setSignInError: (state, error) => {
            state.signInError = error
        },

        clearSignInError: state => {
            state.signInError = null
        }
    }
}
