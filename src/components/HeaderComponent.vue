<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-light">
            <div class="container">
                <div class="navbar-collapse" id="navbar-toggler">
                    <a class="navbar-brand" href="#"><img src="./../assets/img/logo.png" alt=""></a>
                    <ul class="navbar-nav d-flex justify-content-center align-items-center">
                        <li class="nav-item" v-for="(item, index) in menuLinks" :key="index">
                            <router-link :to="{ name: item.routeName }" active-class="my-active" class="nav-link ">
                                {{ item.label }}
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
                // {
                //     label: "Tags",
                //     routeName: "tags",
                // },
            ], 
        };
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