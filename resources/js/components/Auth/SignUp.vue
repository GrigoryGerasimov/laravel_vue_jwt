<script>
import { defineComponent } from 'vue'
import { Button, FormControl } from '../Common'
import { ApiService } from '../../services/ApiService.js'
import { TokenService } from '../../services/TokenService.js'

export default defineComponent({
    name: 'SignUp',

    components: {
        FormControl,
        Button
    },

    data() {
        return {
            firstName: this.$store.getters.signUpFirstName,
            lastName: this.$store.getters.signUpLastName,
            email: this.$store.getters.signUpEmail,
            password: this.$store.getters.signUpPassword,
            passwordConfirmation: this.$store.getters.signUpPasswordConfirmation
        }
    },

    computed: {
        person() {
            return {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                password_confirmation: this.passwordConfirmation
            }
        },

        error() {
            return this.$store.getters.signUpError
        },

        isDisabled() {
            return !(this.firstName && this.lastName && this.email && this.password && this.passwordConfirmation) || this.error
        }
    },

    methods: {
        async submitHandler() {
            const data = await this.$store.dispatch('handleSignUpSubmit', this.person)
            if (data) this.$store.dispatch('handleSignInSubmit', data)
        }
    },

    mounted() {
        this.$refs.input.$el.children[1].querySelector('#first_name').focus()
    }
})
</script>

<template>
    <div class='w-50'>
        <FormControl
            input-id='first_name'
            input-title='First Name'
            input-name='first_name'
            input-placeholder='First name'
            v-model='firstName'
            ref='input'
        />
        <FormControl
            input-id='last_name'
            input-title='Last Name'
            input-name='last_name'
            input-placeholder='Last name'
            v-model='lastName'
        />
        <FormControl
            input-id='email'
            input-title='Email'
            input-type='email'
            input-name='email'
            input-placeholder='Email'
            v-model='email'
        />
        <FormControl
            input-id='password'
            input-title='Password'
            input-type='password'
            input-name='password'
            input-placeholder='Password'
            v-model='password'
        />
        <FormControl
            input-id='password_confirmation'
            input-title='Password Confirmation'
            input-type='password'
            input-name='password_confirmation'
            input-placeholder='Password confirmation'
            v-model='passwordConfirmation'
        />
        <Button
            btn-type='submit'
            class='btn-outline-success'
            @click.prevent='submitHandler'
            :disabled='isDisabled'
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
