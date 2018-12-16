<template>
    <div class="container">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
            </tr>
            </thead>
            <template v-for="(item, index) in this.$store.state.products">
                <tr>
                    <td>{{item.ID}}</td>
                    <td>{{item.Name}}</td>
                    <td>
                        <input v-model="item.Description" v-bind:index="index" v-on:input="onInput">
                    </td>
                    <td>{{item.Date}}</td>
                    <td>{{item.Amount}}</td>
                </tr>
            </template>
        </table>
    </div>
</template>

<script>
    export default {
        created: function () {
            this.$store.commit('getProducts');
        },
        methods: {
            onInput (evt) {
                const index = evt.target.getAttribute('index');
                const value = evt.target.value;
                this.$store.dispatch('updateRow', {value, index});
            }
        }
    }
</script>
