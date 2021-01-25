import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import router from "./router/router";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isAuthenticated: false,
        user: null,
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
            state.user = null;
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
            router.push('/');
          }) 
          .catch(err => console.log(err));
        },
        login(context, authData) {
            const data = JSON.stringify({
                email: authData.email,
                password: authData.password
            });
            
            console.log(authData);
            console.log(data);
            axios.post('/login', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    console.log('login');
                    console.log(res);
                    context.commit('authUser');
                    context.commit('storeUser', authData);
                    router.push('/');
                })
                .catch(err => console.log(err));
        },
        logout(context) {
            context.commit('clearAuthData');
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