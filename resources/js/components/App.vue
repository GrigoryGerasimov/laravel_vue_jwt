<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App'
})
</script>

<template>
    <ul class='navbar-nav mb-5 d-flex flex-row justify-content-evenly'>
        <li class='nav-item'>
            <router-link
                :to="{ name: 'fruits.index' }"
                class='nav-link link-dark link-opacity-50-hover text-decoration-none'
            >
                Fruits List
            </router-link>
        </li>
        <li class='nav-item'>
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
    <div class='my-5'>
        <router-view/>
    </div>
</template>

<style scoped>

</style>
