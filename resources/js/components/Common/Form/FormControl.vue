<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'FormControl',

    props: {
        inputId: {
            type: String,
            required: true
        },
        inputName: {
            type: String,
            required: true
        },
        inputPlaceholder: {
            type: String,
            required: false
        },
        inputTitle: {
            type: String,
            required: true
        },
        inputType: {
            type: String,
            default: 'text'
        },
        modelValue: String
    },

    emits: ['update:modelValue']
})
</script>

<template>
    <div class='input-group col-12 d-flex flex-row align-items-baseline my-3'>
        <div class='col-4'>
            <label class='form-label' :for='inputId'>{{ inputTitle }}</label>
        </div>
        <div class='col-8'>
            <input
                class='form-control'
                :type="inputType"
                :id='inputId'
                :name='inputName'
                :placeholder='inputPlaceholder'
                :value='modelValue'
                @input="$emit('update:modelValue', $event.target.value)"
            />
        </div>

    </div>
</template>

<style scoped>

</style>
