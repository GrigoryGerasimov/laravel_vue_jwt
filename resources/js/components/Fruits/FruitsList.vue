<script>
import { defineComponent } from 'vue'
import { Table, TableHeader, TableBody } from '../Common'

export default defineComponent({
    name: 'FruitsList',

    components: {
        Table,
        TableHeader,
        TableBody
    },

    data() {
        return {
            fruits: []
        }
    },

    methods: {
        async getFruitsList() {
            const response = await axios.get('/api/fruits')
            this.fruits = response.data
        }
    },

    mounted() {
        this.getFruitsList()
    }
})
</script>

<template>
    <Table v-show='fruits.length'>
        <TableHeader/>
        <TableBody :fruits="fruits"/>
    </Table>
</template>

<style scoped>

</style>
