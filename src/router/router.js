import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import EventSingle from "../views/EventSingle";
import Login from "@/views/Login";
import Profile from "@/views/Profile";
import store from "@/store";
import Admin from "../views/Admin";
import SignUp from "@/views/SignUp";

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/login', component: Login},
    {path: '/event-single', component: EventSingle},
    // {path: '/map', component: Map},
    // {path: '/statistics', component: Statistics},
    // {path: '/about-us', component: AboutUs},
    {path: '/admin', component: Admin},
    {path: '/signup', component: SignUp},
    {
        path: '/my-profile', component: Profile, beforeEnter(to, from, next) {
            if (store.state.isAuthenticated) {
                next();
            } else {
                next('/login');
            }
        }
    },
    {
        path: '/event/:id',
        name: 'eventSingle',
        component: () => import('../views/EventSingle.vue'),
      }
    // {path: "*", component: PageNotFound},
]

export default new VueRouter({mode: 'history', routes})