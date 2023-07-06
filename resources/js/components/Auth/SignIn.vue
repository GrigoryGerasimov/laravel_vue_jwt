<script>
import { defineComponent } from 'vue'
import { FormControl, Button } from '../Common'
import { ApiService } from '../../services/ApiService.js'
import {TokenService} from "../../services/TokenService.js";

export default defineComponent({
    name: 'SignIn',

    components: {
        FormControl,
        Button
    },

    data() {
        return {
            email: null,
            password: null,
            error: null
        }
    },

    computed: {
        login() {
            return {
                email: this.email,
                password: this.password
            }
        },

        isDisabled() {
            return !(this.email && this.password) || this.error
        }
    },

    methods: {
        async submitHandler() {
            try {
                const data = await ApiService.send('/api/auth/login', this.login)
                if (data['access_token']) TokenService.store(data)
                if (data['error']) throw new Error(data['error'])
                this.$router.replace({ name: 'fruits.index' })
            } catch (error) {
                this.error = error.message
                setTimeout(() => this.error = null, 3000)
            }
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
