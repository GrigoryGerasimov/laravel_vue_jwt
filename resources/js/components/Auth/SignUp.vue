<script>
import { defineComponent } from 'vue'
import { Button, FormControl } from '../Common'

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
        }
    },

    methods: {
        async submitHandler() {
            const response = await axios.post('/api/user/auth/signup', this.person)
            console.log(response.data)
        }
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
        <Button btn-type='submit' class='btn-outline-success' @click.prevent='submitHandler'>Submit</Button>
    </div>
</template>

<style scoped>

</style>
