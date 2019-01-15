import Vue from 'vue';
import Vuex from 'vuex';

import chatStore from './modules/chatStore'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        chatStore
    }
});
