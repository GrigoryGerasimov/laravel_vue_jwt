<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ButtonLink'
})
</script>

<template>
    <a href='#' class='btn' role='button'>
        <slot></slot>
    </a>
</template>

<style scoped>

</style>
