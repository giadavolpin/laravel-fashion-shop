<template>
    <section id="prodotti" class="container-fluid pt-5 pb-5">
        <section class="container">
            <div class="col-12 text-center">
                <p class="display-5 fw-semibold">Esplora i nostri prodotti</p>
                <p class="fs-5 fw-semibold text-secondary">Viso, occhi, labbra, mani. Tutto ciò che serve per un make up che esalti la tua bellezza.</p>
            </div>
            <div class="d-flex justify-content-end">
                <nav aria-label="..." class="pt-3" id="">
                    <ul class="pagination">
                        <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                            <button class="page-link" :disabled="currentPage === 1"
                                @click="getProducts(currentPage - 1)"><i class="fa-solid fa-arrow-left"></i></button>
                        </li>
                        <li class="page-item" v-for="n in lastPage">
                            <button class="page-link" @click="getProducts(n)">{{ n }}</button>
                        </li>
                        <li class="page-item" :class="{ 'disabled': currentPage === lastPage }">
                            <button class="page-link" :disabled="currentPage === lastPage"
                                @click="getProducts(currentPage + 1)"><i class="fa-solid fa-arrow-right"></i></button>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
        
        <ul class="cards">
            <li v-for="(product, index) in products" :key="index">
                <article class="card">
                    <div>
                        <img :src="`${store.imageUrl}${product.image_link}`" :alt="product.name" class="card-image" />
                    </div>
                    <div class="card-overlay">
                        <div class="card_header">
                                <h3 class="card-title">{{ product.name }}</h3>
                        </div>
                        <p class="card-description">{{ truncateDescription(product.description) }}</p>
                        <div class="card-description">
                            <router-link class="button button-pink"
                                :to="{ name: 'single-product', params: { id: product.id } }">
                                Vedi il product
                            </router-link>
                        </div>
        
                    </div>
                </article>
            </li>
        </ul>
    </section>
</template>

<script>
import axios from "axios";
import { store } from "../store";


    export default {
        name: 'ProductList',
        props: ['product'],
        components: {

        },
        data(){
            return{
                store,
                products: [],
                contentMaxLen: 80,
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
* {
  box-sizing: border-box;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 10px 5vw;
    padding: 0;
    list-style-type: none;
}

.card {
  position: relative;
  display: block;
  height: 100%;  
  border-radius: calc(40 * 1px);
  overflow: hidden;
  text-decoration: none;
}

.card-image {
	width: 100%;
	height: 500px;
	object-fit: cover;
	object-position: 50% 50%;
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;  
  background-color: #fff;      
  transform: translateY(100%);
  transition: .2s ease-in-out;
}

.card:hover .card-overlay {
  transform: translateY(0);
}

.card_header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;   
  background-color: #fff;
  transform: translateY(-100%);
  transition: .2s ease-in-out;
}
.card:hover .card_header {
  transform: translateY(0);
}
.card-title {
  font-size: 1em;
  margin: 0 0 .3em;
  color: #ef0288;
}
.card-description {
  padding: 0 2em 2em;
  margin: 0;
  color: black;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>