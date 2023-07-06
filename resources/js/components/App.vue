<script>
import { defineComponent } from 'vue'
import { TokenService, JWT } from '../services/TokenService.js'
import ButtonLink from "./Common/ButtonLink.vue";
import {ApiService} from "../services/ApiService.js";

export default defineComponent({
    name: 'App',
    components: {ButtonLink},

    data() {
        return {
            accessToken: null
        }
    },

    methods: {
        getAccessToken() {
            this.accessToken = TokenService.read()[JWT.ACCESS_TOKEN]
        },

        async signOutHandler() {
            const response = await ApiService.send('/api/auth/logout')
            if (response.message === 'Successfully logged out') {
                TokenService.remove()
                this.$router.replace({ name: 'auth.signin' })
            }
        }
    },

    mounted() {
        this.getAccessToken()
    },

    updated() {
        this.getAccessToken()
    }
})
</script>

<template>
    <ul class='navbar-nav mb-5 d-flex flex-row justify-content-evenly'>
        <li class='nav-item' v-show='accessToken'>
            <ul class='navbar-nav mb-5 d-flex flex-row justify-content-evenly'>
                <li class='nav-item me-5'>
                    <router-link
                        :to="{ name: 'fruits.index' }"
                        class='nav-link link-dark link-opacity-50-hover text-decoration-none'
                    >
                        Fruits List
                    </router-link>
                </li>
                <li class='nav-item me-5'>
                    <ButtonLink
                        @click.prevent='signOutHandler'
                        class='nav-link link-dark link-opacity-50-hover text-decoration-none'
                    >
                        Sign Out
                    </ButtonLink>
                </li>
            </ul>
        </li>

        <li class='nav-item' v-show='!accessToken'>
            <ul class='navbar-nav mb-5 d-flex flex-row justify-content-evenly'>
                <li class='nav-item me-5'>
                    <router-link
                        :to="{ name: 'auth.signin' }"
                        class='nav-link link-dark link-opacity-50-hover text-decoration-none'
                    >
                        Sign In
                    </router-link>
                </li>
                <li class='nav-item'>
                    <router-link
                        :to="{ name: 'auth.signup' }"
                        class='nav-link link-dark link-opacity-50-hover text-decoration-none'
                    >
                        Sign Up
                    </router-link>
                </li>
            </ul>
        </li>
    </ul>
    <div class='my-5'>
        <router-view :key='$route.fullPath'/>
    </div>
</template>

<style scoped>

</style>
