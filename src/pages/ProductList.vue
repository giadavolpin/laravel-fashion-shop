<template>
    <section>
        <h1 class="pt-3">Lista dei products</h1>
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
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
