import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-vue/dist/bootstrap-vue.js';

import { createHead } from '@vueuse/head';

const app = createApp(App);
const head = createHead();

app.use(store);
app.use(router);
app.use(head);
app.mount('#app');
