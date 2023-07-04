<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Table'
})
</script>

<template>
    <table class='col-12 text-center'>
        <slot></slot>
    </table>
</template>

<style scoped>

</style>
