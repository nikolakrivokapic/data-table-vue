import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const index = new Vuex.Store({
    state: {
        loading: true,
        products: []
    },
    mutations: {
        getProducts: (state) => {
            firebase.database().ref('/products/').orderByChild('id').once('value').then((snapshot) => {
                state.products = snapshot.val();
                state.loading = false;
            });
        }
    },
    actions: {
        updateRow: (store, arg) => {
            const {index, value} = arg;
            firebase.database().ref("/products/"+index+"/Description").set(value);
        }
    }
});

export default index
