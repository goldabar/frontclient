import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isAuthenticated: false,
        user: null
    },
    mutations: {
        authUser(state) {
            state.isAuthenticated = true;
        },
        storeUser(state, user) {
            state.user = user;
            console.log('storeUser');
            console.log(user);
        },
        clearAuthData(state) {
            state.isAuthenticated = false;
        }
    },
    actions: {
        logout(context) {
            context.commit('unAuthUser');
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.isAuthenticated;
        },
        userData(state) {
            return state.user;
        }
    }
})