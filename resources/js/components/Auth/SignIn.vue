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
            email: null,
            password: null
        }
    },

    computed: {
        login() {
            return {
                email: this.email,
                password: this.password
            }
        }
    },

    methods: {
        async submitHandler() {
            const response = await axios.post('/api/user/auth/signin', this.login);
            console.log(response.data)
        }
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
        />
        <FormControl
            input-id='password'
            input-title='Password'
            input-type='password'
            input-name='password'
            input-placeholder='Password'
            v-model='password'
        />
        <Button btn-type='submit' class='btn-outline-success' @click.prevent='submitHandler'>Submit</Button>
    </div>
</template>

<style scoped>

</style>
