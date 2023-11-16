import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { RouterView } from 'vue-router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';




// Import components
import Pagination from 'v-pagination-3';
import App from './App.vue';
import Home from  './pages/Home.vue';
import ListUser from  './pages/user/Index.vue';
import CreateUser from  './pages/user/Create.vue';
import ShowUser from "./pages/user/Show.vue";
import EditUser from "./pages/user/Edit.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/users',
            component: RouterView,
            children: [{
                path: '',
                name: 'list-user',
                component: ListUser
            }, {
                path: ':id/edit',
                name: 'edit-user',
                component: EditUser
            },
                {
                    path: '/create',
                    name: 'create-user',
                    component: CreateUser
                },
                {
                    path: '/show/:id',
                    name: 'show-user',
                    component: ShowUser
                },
                ]
        },
    ]
});

const app = createApp(App);
app.use(router);
app.use(VueSweetalert2);
app.component('pagination', Pagination);
app.mount('#app');
