import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const index = new Vuex.Store({
    state: {
        products: []
    },
    mutations: {
        getProducts: (state) => {
            firebase.database().ref('/products/').orderByChild('id').once('value').then((snapshot) => {
                state.products = snapshot.val();
            });
        },
        updateRow: (state, arg) => {
            const {index, value} = arg;
            state.products[index].description = value;
            firebase.database().ref("/products/"+index+"/Description").set(value);

        }
    }
});

export default index
