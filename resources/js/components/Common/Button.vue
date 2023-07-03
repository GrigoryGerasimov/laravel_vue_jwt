<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Button',

    props: {
        type: {
            type: String,
            required: true,
            default: 'button'
        }
    }
})
</script>

<template>
    <button :type='type' class='btn'>
        <slot></slot>
    </button>
</template>

<style scoped>

</style>
