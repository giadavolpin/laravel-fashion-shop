<template>
    <section id="jumbotron" class="container">

    </section>
    <section class="container">
        <div class="col-12 text-center">
            <p class="display-5 fw-semibold">Scopri tutti i nostri Brands </p>
            <p class="fs-5 fw-semibold text-secondary">Con i nostri brand ti offriamo un'alta qualità ad un prezzo
                conveniente.</p>
        </div>
        <div class="container m-auto">
        <div class=" cards-container overflow-auto">
            <div class="d-flex justify-content-around gap-5  flex-wrap">
                <div v-for="(product, index) in product" :key="index" >
                    <div>
                        <img :src="`${store.imageUrl}${product.image_link}`" :alt="product.name" class="card-image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'Store',
    
    data() {
        return {
            store,
            product: null,
        }
    },
    methods: {
        getProduct() {
            axios.get(`${this.store.apiBaseUrl}/products`).then((response) => {
                console.log(response.data.results) 
                this.products = response.data.results;
                this.total = response.data.results.total;
            })
        },
    },
    mounted() {
        this.getProduct()
    }
}
</script>

<style lang="scss" scoped>

#jumbotron {
    background-image: url(./../assets/img/jumbo.jpg);
    background-position: center;
    background-size: cover;
    min-height: 220px;
}

</style>