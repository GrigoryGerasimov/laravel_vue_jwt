<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TableBody',

    props: {
        fruits: Array
    }
})
</script>

<template>
    <tbody v-for='fruit of fruits' :key='fruit.id'>
    <tr class='col-12'>
        <td class='col-2'>{{ fruit.id }}</td>
        <td class='col-2'>{{ fruit.name }}</td>
        <td class='col-2'>{{ fruit.type }}</td>
        <td class='col-2'>{{ fruit.ean }}</td>
        <td class='col-2'>{{ fruit.origin }}</td>
        <td class='col-2'>{{ fruit.price }}</td>
    </tr>
    </tbody>
</template>

<style scoped>

</style>
