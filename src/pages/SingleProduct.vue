<template>
<div id="single">
    <section class="container pt-5 d-flex justify-content-center" v-if="product" >
        <div class="card mb-3" style="max-width: 1000px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="`${store.imageUrl}${product.image_link}`" :alt="product.name" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="fw-semibold">{{ product.name }}</h2>
                        <p class="card-text">{{ product.description }}.</p>
                        <div v-if="product.brand">
                            <p class="text-capitalize"><span class="fw-semibold">Brand :</span> {{ product.brand.name }}.</p>
                        </div>
                        <div v-else="product.brand">
                            <p>Nessun brand</p>
                        </div>

                        <div v-if="product.category">
                            <p class="text-capitalize"><span class="fw-semibold">Category :</span> {{ product.category.name }}.</p>
                        </div>
                        <div v-else="product.category">
                            <p class="fw-semibold">Nessun category</p>
                        </div>

                        <div v-if="product.texture">
                            <p class="text-capitalize"><span class="fw-semibold">Texture :</span> {{ product.texture.name }}.</p>
                        </div>
                        <div v-else="product.texture">
                            <p class="fw-semibold">Nessun texture</p>
                        </div>

                        <div v-if="product.price">
                            <p class="text-capitalize"><span class="fw-semibold">Price :</span> {{ product.price }} €</p>
                        </div>
                        <div v-else="product.price">
                            <p class="fw-semibold">Nessun prezzo</p>
                        </div>

                        <button type="button" class="button button-pink me-3">Acquista</button>
                        <router-link class="button-black" :to="{name: 'products'}">
                            Torna alla lista
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-else>
        <AppLoading></AppLoading>
    </section>
</div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import AppLoading from '../components/LoadingCommponent.vue';

export default {
    name: 'SingleProduct',
    data() {
        return {
            store,
            product: null,
        }
    },
    components: {
        AppLoading,
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