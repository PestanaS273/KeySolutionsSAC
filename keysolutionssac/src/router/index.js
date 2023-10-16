import Vue from 'vue';
import VueRouter from 'vue-router';
import LandinfPage from '../views/LandingPage.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandinfPage,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
