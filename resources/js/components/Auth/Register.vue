<script>
import { defineComponent } from 'vue'
import { Button, FormControl } from '../Common'

export default defineComponent({
    name: 'Register',
    components: {
        FormControl,
        Button
    }
})
</script>

<template>
    <div class='w-50'>
        <FormControl
            input-id='first_name'
            input-title='First Name'
            input-name='first_name'
            input-placeholder='First name'
        />
        <FormControl
            input-id='last_name'
            input-title='Last Name'
            input-name='last_name'
            input-placeholder='Last name'
        />
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
        <FormControl
            input-id='password_confirmation'
            input-title='Password Confirmation'
            input-type='password'
            input-name='password_confirmation'
            input-placeholder='Password confirmation'
        />
        <Button btn-type='submit' class='btn-outline-success'>Submit</Button>
    </div>
</template>

<style scoped>

</style>
