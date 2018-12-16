<template>
    <div id="app" v-bind:class="{ loading: this.$store.state.loading }">
        <div class="loader"></div>
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
