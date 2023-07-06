import { createStore } from 'vuex'
import { signIn, signUp } from './modules'

export default createStore({
    modules: {
        signIn,
        signUp
    }
})
