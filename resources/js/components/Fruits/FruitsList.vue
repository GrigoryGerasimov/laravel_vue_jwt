<script>
import { defineComponent } from 'vue'
import { Table, TableHeader, TableBody } from '../Common'
import { ApiService } from '../../services/ApiService.js'

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
            this.fruits = await ApiService.receive('/api/fruits')
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
