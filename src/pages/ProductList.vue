<template>
    <section class="container">
        <h1 class="pt-3">Lista dei products</h1>
        <div class="row">
            <div class="col-12 col-md-3" v-for="(product, index) in products" :key="index">
                <div class="card" style="width: 18rem; height: 23rem;">
                    <img :src="`${store.imageUrl}${product.image_link}`" class="card-img-top" :alt="product.name">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text">{{ truncateDescription(product.description) }}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>

        <nav aria-label="..." class="pt-3">
            <ul class="pagination">
                <li class="page-item" :class="{'disabled': currentPage === 1}">
                    <button class="page-link" :disabled="currentPage === 1" @click="getProducts(currentPage - 1)">Previous</button>
                </li>
                <li class="page-item" v-for="n in lastPage">
                    <button class="page-link" @click="getProducts(n)">{{n}}</button>
                </li>
                <li class="page-item" :class="{'disabled': currentPage === lastPage}">
                    <button class="page-link" :disabled="currentPage === lastPage" @click="getProducts(currentPage + 1)">Next</button>
                </li>
            </ul>
        </nav> 
    </section>
</template>

<script>
import axios from "axios";
import { store } from "../store";


    export default {
        name: 'ProductList',
        components: {

        },
        data(){
            return{
                store,
                products: [],
                contentMaxLen: 100,
                currentPage: 1,
                lastPage: null,
                total: 0,
            }
        },
        methods:{
            getProducts(pagenum){
                axios.get(`${this.store.apiBaseUrl}/products`,{params: { page: pagenum}}).then((response) => {
                    console.log(response.data.results);
                    this.products = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.total = response.data.results.total;
                });
            },
            truncateDescription(text) {
            if (text.length > this.contentMaxLen) {
                return text.substr(0, this.contentMaxLen) + '...';
            }
            return text;
        }
        },
        mounted() {
            this.getProducts(1);
        },
    }
</script>

<style lang="scss" scoped>

</style>
