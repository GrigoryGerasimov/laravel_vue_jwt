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
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            passwordConfirmation: null,
            error: null
        }
    },

    computed: {
        person() {
            return {
                name: `${this.firstName} ${this.lastName}`,
                email: this.email,
                password: this.password,
                password_confirmation: this.passwordConfirmation
            }
        },

        isDisabled() {
            return !(this.firstName && this.lastName && this.email && this.password && this.passwordConfirmation) || this.error
        }
    },

    methods: {
        async submitHandler() {
            try {
                const signUpData = await ApiService.send('/api/user/auth/signup', this.person)
                if (signUpData['error']) throw new Error(signUpData['error'])

                const signInData = await ApiService.send('/api/auth/login', signUpData)
                if (signInData['access_token']) TokenService.store(signInData)
                if (signInData['error']) throw new Error(signInData['error'])

                this.$router.replace({ name: 'fruits.index' })
            } catch (error) {
                this.error = error.message
                setTimeout(() => this.error = null, 3000)
            }
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
