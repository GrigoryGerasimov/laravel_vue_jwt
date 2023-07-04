<script>
import { defineComponent } from 'vue'
import { FormControl, Button } from '../Common'

export default defineComponent({
    name: 'SignIn',

    components: {
        FormControl,
        Button
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
        />
        <FormControl
            input-id='password'
            input-title='Password'
            input-type='password'
            input-name='password'
            input-placeholder='Password'
        />
        <Button btn-type='submit' class='btn-outline-success'>Submit</Button>
    </div>
</template>

<style scoped>

</style>
