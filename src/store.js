import axios from 'axios';
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
        signup(context, authData){
          const data = JSON.stringify({
            firstName: authData.firstName,
            lastName: authData.lastName,
            email: authData.email,
            password: authData.password,
          });
          axios.post('/account/register', data,{
              headers: {
                  'Content-Type' : 'application/json'
              }
          }) 
          .then(res =>{
            console.log('signup');
            console.log(res);
          }) 
          .catch(err => console.log(err));
        },
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