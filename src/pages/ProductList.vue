<template>
        <div class="my-body">
            <div class="sidebar">
                <div class="first">
                    <h2><a href="#">Categories</a></h2>
                    <ul>
                        <li><a href="#">Tees / T-Shirts</a></li>
                        <li><a href="#">Casual Tops</a></li>
                        <li><a href="#">Dresses</a></li>
                        <li><a href="#">Knits</a></li>
                        <li><a href="#">Pants</a></li>
                        <li><a href="#">Skirts</a></li>
                        <li><a href="#">Shorts</a></li>
                        <li><a href="#">Sets</a></li>
                        <li><a href="#">Swimwear</a></li>
                        <li><a href="#">Hoddies</a></li>
                        <li><a href="#">Sweaters</a></li>
                        <li><a href="#">Outerwear</a></li>
                        <li><a href="#">Belts</a></li>
                        <li><a href="#">Hosiery</a></li>
                        <li><a href="#">Innerwear</a></li>
                        <li><a href="#">Plus-size</a></li>
                        <li><a href="#">Maternity</a></li>
                    </ul>
                </div>
                <div>
                    <h2><a href="#">Brands</a></h2>
                </div>
                <div>
                    <h2><a href="#">Textures</a></h2>
                </div>
            </div>
            <div class="content">
                <div class="figure"> <img src="./../assets/image/apparel.jpg" alt=""> </div>
                <div class="d-flex justify-content-end">
                    <nav aria-label="..." class="pt-3" id="">
                        <ul class="pagination">
                            <li class="page-item" :class="{'disabled': currentPage === 1}">
                                <button class="page-link" :disabled="currentPage === 1"
                                    @click="getProducts(currentPage - 1)">Previous</button>
                            </li>
                            <li class="page-item" v-for="n in lastPage">
                                <button class="page-link" @click="getProducts(n)">{{n}}</button>
                            </li>
                            <li class="page-item" :class="{'disabled': currentPage === lastPage}">
                                <button class="page-link" :disabled="currentPage === lastPage"
                                    @click="getProducts(currentPage + 1)">Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="products">
                    <ul>
                        <li v-for="(product, index) in products" :key="index"> 
                            <a href="#">
                            <img :src="`${store.imageUrl}${product.image_link}`" :alt="product.name">
                            <!-- <img src="./../assets/image/apparel1.jpg" alt=""> -->
                            </a>
                            <h4>{{ product.name }}</h4>
                            <p>{{ truncateDescription(product.description) }}</p>
                            <span>Altro</span>
                            <!-- <router-link class="btn btn-primary" :to="{name: 'single-product', params:{ slug: product.slug }}">
                                Vedi il product
                            </router-link> -->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
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
.my-body {
    width: 960px;
    margin: 20px auto;
    height: auto;
    position: relative;
    
    .sidebar {
        float: left;
        margin: 0 10px 0 0;
        background: url("./../assets/image/bg-content.png");
        // background: url("./../assets/image/bg-body-top.jpg");

        div.first {
            background: none;
        }
    }
}

.my-body .sidebar div h2 {
    margin: 0;
    font-weight: bold;
    font-size: 15px;
    text-decoration: none;

    a {
        text-decoration: none;
        color: #f6008a;
        font-weight: normal;
        font-size: 16px;
    }
}

.my-body .sidebar div ul {
    margin: 0 0 60px;
    padding: 0;
    list-style: none;

    li {
        margin: 5px 0 0 0;

        a {
            color: grey;
            text-decoration: none;
        }
    }
}

.my-body .sidebar div {
    width: 138px;
    font-family: arial;
    font-size: 14px;
    padding: 15px 11px;
    background: url("./../assets/image/border-top.gif") no-repeat center top;
    

    h2 {
        margin: 0;
        font-weight: bold;
        font-size: 15px;
    }
}

// Content dei products
.my-body .content {
    float: left;
    

    .figure {
        height: 260px;
    }

    .products {
        margin: 0 0 24px;

        img{
            height: 140px;
        }

        ul {
            padding: 0;
            list-style: none;
            overflow: hidden;

            li {
                width: 170px;
                float: left;
                margin-left: 10px;
                margin-right: 10px;

                h4 {
                    margin: 5px 0 0;
                    text-transform: uppercase;
                    color: #f6008a;
                    font-family: arial;
                    font-size: 14px;
                    font-weight: normal;
                }

                p {
                    margin: 0;
                    color: #b2a7ab;
                    font-family: arial;
                    font-size: 13px;
                }

                span {
                    font-family: arial;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>