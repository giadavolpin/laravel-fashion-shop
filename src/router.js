import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProductList from './pages/ProductList.vue';
import AboutUs from './pages/AboutUs.vue';
import SingleProduct from './pages/SingleProduct.vue';
import ContactUs from './pages/ContactUs.vue';
import NotFound from './pages/NotFound.vue';
import Brands from './pages/Brands.vue';
import Colors from './pages/Colors.vue';
import Tags from './pages/Tags.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/products',
            name: 'products',
            component: ProductList
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactUs
        },
        {
            path: '/brands',
            name: 'brands',
            component: Brands 
        },
        {
            path: '/colors',
            name: 'colors',
            component: Colors 
        },
        {
            path: '/tags',
            name: 'tags',
            component: Tags
        },
        {
            path:'/products/:id',
            name: 'single-product',
            component: SingleProduct
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound
        }
    ]
});

export { router };