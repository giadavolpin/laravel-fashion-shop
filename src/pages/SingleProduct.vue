<template>
    <section class="container pt-3" v-if="product">
        <h1>{{ product.name }}</h1>
        <h4>{{ product.description }}</h4>
    </section>

    <section v-else>Loading</section>
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
            axios.get(`${this.store.apiBaseUrl}/products/${this.$route.params.slug}`).then((response) => {
                console.log(response.data.results);
                if (response.data.success) {
                    //console.log(response.data.results);
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