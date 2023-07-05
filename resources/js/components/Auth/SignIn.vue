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
            password: null
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
            return !(this.email && this.password)
        }
    },

    methods: {
        async submitHandler() {
            const data = await ApiService.create('/api/auth/login', this.login)
            if (data['access_token']) TokenService.store(data)
            this.$router.push({ name: 'fruits.index' })
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
        <Button
            btn-type='submit'
            class='btn-outline-success'
            @click.prevent='submitHandler'
            :disabled="isDisabled"
        >
            Submit
        </Button>
    </div>
</template>

<style scoped>

</style>
