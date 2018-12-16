import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './app.css';

Vue.use(VueAxios, axios);

var config = {
    apiKey: "AIzaSyAFk090Ukm--hmMsJVNI9qXVUeWvNzOf0E",
    authDomain: "nikola-40bba.firebaseapp.com",
    databaseURL: "https://nikola-40bba.firebaseio.com",
    projectId: "nikola-40bba",
    storageBucket: "nikola-40bba.appspot.com",
    messagingSenderId: "300143212031"
};

firebase.initializeApp(config);

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
