<template>
<div id="single">
    <section class="container pt-3 d-flex justify-content-center" v-if="product" >
        <div class="card mb-3" style="max-width: 1000px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="`${store.imageUrl}${product.image_link}`" :alt="product.name" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text">{{ product.description }}.</p>
                        <div v-if="product.brand">
                            <p>Brand: {{ product.brand.name }}</p>
                        </div>
                        <div v-else="product.brand">
                            <p>Nessun brand</p>
                        </div>

                        <div v-if="product.category">
                            <p>Category: {{ product.category.name }}</p>
                        </div>
                        <div v-else="product.category">
                            <p>Nessun category</p>
                        </div>

                        <div v-if="product.texture">
                            <p>Texture: {{ product.texture.name }}</p>
                        </div>
                        <div v-else="product.texture">
                            <p>Nessun texture</p>
                        </div>

                        <div v-if="product.tangs && product.tangs.length > 0">
                            <div>
                                <span v-for="(tang, index) in product.tangs" :key="index" class="badge text-bg-info">
                                    {{ tang.name }}
                                </span>
                            </div>
                        </div>

                        <button type="button" class="btn btn-success me-3">Acquista</button>
                        <router-link class="btn btn-dark" :to="{name: 'products'}">
                            Torna alla lista
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-else>
        Loading
    </section>
</div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'SingleProduct',
    data() {
        return {
            store,
            product: null,
        }
    },
    methods: {
        getProduct() {
            console.log(this.$route);
            axios.get(`${this.store.apiBaseUrl}/products/${this.$route.params.id}`).then((response) => {
                console.log(response.data.results);
                if (response.data.success) {
                    console.log(response.data.results);
                    this.product = response.data.results;
                } else {
                    //console.log(this.$router);
                    this.$router.push({ name: 'not-found' });
                }
            });
        }
    },
    mounted() {
        this.getProduct();
    },
}
</script>

<style lang="scss" scoped>


</style>