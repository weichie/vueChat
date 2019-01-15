import Vue from 'vue';
import Vuex from 'vuex';

import chatStore from './modules/chatStore'
import authStore from './modules/authStore'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		chatStore,
		authStore
	}
});