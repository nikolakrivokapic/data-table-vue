<template>
    <div id="app">
        <VueDataTable />
    </div>
</template>

<script>
    import VueDataTable from './components/VueDataTable.vue';

    export default {
        name: 'app',
        components: {
            VueDataTable
        }
    }
</script>
