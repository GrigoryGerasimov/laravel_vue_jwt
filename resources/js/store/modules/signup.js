import { ApiService } from '../../services/ApiService.js'
import { TokenService } from '../../services/TokenService.js'
import router from '../../components/router/router.js'

export default {
    state: {
        signUpFirstName: null,
        signUpLastName: null,
        signUpEmail: null,
        signUpPassword: null,
        signUpPasswordConfirmation: null,
        signUpError: null
    },

    getters: {
        signUpFirstName: state => state.signUpFirstName,
        signUpLastName: state => state.signUpLastName,
        signUpEmail: state => state.signUpEmail,
        signUpPassword: state => state.signUpPassword,
        signUpPasswordConfirmation: state => state.signUpPasswordConfirmation,
        signUpError: state => state.signUpError
    },

    actions: {
        handleSignUpData: ({ state, commit, dispatch }, data) => {
            [
                'setSignUpFirstName',
                'setSignUpLastName',
                'setSignUpEmail',
                'setSignUpPassword',
                'setSignUpPasswordConfirmation'
            ].forEach(elem => commit(elem, data))
        },

        handleSignUpSubmit: async ({ state, commit, dispatch }, data) => {
            dispatch('handleSignUpData', data)
            try {
                const signUpData = await ApiService.send('/api/user/auth/signup', {
                    'name': `${state.signUpFirstName} ${state.signUpLastName}`,
                    'email': state.signUpEmail,
                    'password': state.signUpPassword,
                    'password_confirmation': state.signUpPasswordConfirmation
                })
                if (signUpData['error']) throw new Error(signUpData['error'])
                return signUpData
            } catch (error) {
                dispatch('handleSignUpError', error.message)
            }
        },

        handleSignUpError: ({ state, commit, dispatch }, data) => {
            commit('setSignUpError', data)
            setTimeout(() => commit('clearSignUpError'), 3000)
        }
    },

    mutations: {
        setSignUpFirstName: (state, { firstName }) => {
            state.signUpFirstName = firstName
        },

        setSignUpLastName: (state, { lastName }) => {
            state.signUpLastName = lastName
        },

        setSignUpEmail: (state, { email }) => {
            state.signUpEmail = email
        },

        setSignUpPassword: (state, { password }) => {
            state.signUpPassword = password
        },

        setSignUpPasswordConfirmation: (state, { password_confirmation }) => {
            state.signUpPasswordConfirmation = password_confirmation
        },

        setSignUpError: (state, error) => {
            state.signUpError = error
        },

        clearSignUpError: state => {
            state.signUpError = null
        }
    }
}
