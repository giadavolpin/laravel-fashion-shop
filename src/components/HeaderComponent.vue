<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-light">
            <div class="container">
                <div class="navbar-collapse" id="navbar-toggler">
                    <a class="navbar-brand" href="#"><img src="./../assets/image/logo.png" alt=""></a>
                    <ul class="navbar-nav d-flex justify-content-center align-items-center">
                        <li class="nav-item" v-for="(link, index) in menuLinks" :key="index">
                            <router-link :to="{ name: link.routeName }" active-class="my-active" class="nav-link ">
                                {{ link.label }}
                            </router-link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                         <button class="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'HeaderComponent',
    data() {
        return {
        menuLinks: [
                {
                    label: "Home",
                    routeName: "home",
                },
                {
                    label: "Products",
                    routeName: "products",
                },
                {
                    label: "Contacts",
                    routeName: "contact",
                }, 
                {
                    label: "Brands",
                    routeName: "brands",
                },
                {
                    label: "Colors",
                    routeName: "colors",
                },
                {
                    label: "Tags",
                    routeName: "tags",
                },
            ], 
 
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
@use '../assets/styles/partials/style.scss' as *;
.navbar {
  padding: 0 2rem;
  background-color: #ef0288;
  height: 50px;
  z-index: 1000;
}
.navbar-collapse {
  align-items: center;
  justify-content: space-between;  
}
.nav-link{
    color: white;
}

</style>