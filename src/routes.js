import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import Registration from './components/auth/Registration.vue'

export const routes = [
	{ path: '/', 					component: Home },
	{ path: '/auth/login',  	component: Login },
	{ path: '/auth/register', 	component: Registration }
];