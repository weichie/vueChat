import Vue from 'vue';
import Vuex from 'vuex';

import chatStore from './components/chatStore'

Vue.use(Vuex);

export const store = new Vuex.Store({
	chatStore
});