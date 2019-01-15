import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

import VueRouter from 'vue-router';
import { routes } from './routes';
import store from './store/store'

import 'bulma/css/bulma.css'
import './assets/style.css'

import config from './firebaseconfig'

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');