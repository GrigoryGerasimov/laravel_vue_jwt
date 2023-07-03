<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'FormControl',

    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true,
            default: 'text'
        }
    }
})
</script>

<template>
    <div class='input-group'>
        <label class='form-label' :for='id'>{{ title }}</label>
        <input class='form-control' :type="type" :id='id' :name='name' :placeholder='placeholder'/>
    </div>
</template>

<style scoped>

</style>
