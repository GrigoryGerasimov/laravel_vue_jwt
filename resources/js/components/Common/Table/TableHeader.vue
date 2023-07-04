<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TableHeader'
})
</script>

<template>
    <thead>
    <tr scope='row' class='col-2'>
        <th scope='col' class='col-2'>ID</th>
        <th scope='col' class='col-2'>Name</th>
        <th scope='col' class='col-2'>Type</th>
        <th scope='col' class='col-2'>EAN</th>
        <th scope='col' class='col-2'>Country of Origin</th>
        <th scope='col' class='col-2'>Price</th>
    </tr>
    </thead>
</template>

<style scoped>

</style>
