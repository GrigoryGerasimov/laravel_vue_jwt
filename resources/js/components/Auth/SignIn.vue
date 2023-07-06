<script>
import { defineComponent } from 'vue'
import { FormControl, Button } from '../Common'

export default defineComponent({
    name: 'SignIn',

    components: {
        FormControl,
        Button
    },

    data() {
        return {
            email: this.$store.getters.signInEmail,
            password: this.$store.getters.signInPassword
        }
    },

    computed: {
        login() {
            return {
                email: this.email,
                password: this.password
            }
        },

        error() {
            return this.$store.getters.signInError
        },

        isDisabled() {
            return !(this.email && this.password) || this.error
        }
    },

    methods: {
        submitHandler() {
            this.$store.dispatch('handleSignInSubmit', this.login)
        }
    },

    mounted() {
        this.$refs.input.$el.children[1].querySelector('#email').focus()
    }
})
</script>

<template>
    <div class='w-50'>
        <FormControl
            input-id='email'
            input-title='Email'
            input-type='email'
            input-name='email'
            input-placeholder='Email'
            v-model='email'
            ref='input'
        />
        <FormControl
            input-id='password'
            input-title='Password'
            input-type='password'
            input-name='password'
            input-placeholder='Password'
            v-model='password'
        />
        <Button
            btn-type='submit'
            class='btn-outline-success'
            @click.prevent='submitHandler'
            :disabled="isDisabled"
        >
            Submit
        </Button>
        <p class='text-danger'>
            {{ error }}
        </p>
    </div>
</template>

<style scoped>

</style>
