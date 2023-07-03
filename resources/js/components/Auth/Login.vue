<script>
import { defineComponent } from 'vue'
import { FormControl, Button } from '../Common'

export default defineComponent({
    name: 'Login',

    components: {
        FormControl,
        Button
    }
})
</script>

<template>
    <FormControl id='email' title='email' type='email' name='email' placeholder='email'/>
    <FormControl id='password' title='password' type='password' name='password' placeholder='password'/>
    <Button type='submit'>Submit</Button>
</template>

<style scoped>

</style>
