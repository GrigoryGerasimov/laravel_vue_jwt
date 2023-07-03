<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Button',

    props: {
        btnType: {
            type: String,
            default: 'button',
            validator(btnType) {
                return ['submit', 'reset', 'button'].includes(btnType)
            }
        }
    }
})
</script>

<template>
    <button :type='btnType' class='btn w-25 my-4 px-3'>
        <slot></slot>
    </button>
</template>

<style scoped>

</style>
