<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-light">
            <div class="container-fluid">
                <div class="navbar-collapse" id="navbar-toggler">
                    <a class="navbar-brand" href="#"><i class="fa-solid fa-code fa-xl fa-flip" style="--fa-animation-duration: 3s;"></i></a>
                    <ul class="navbar-nav d-flex justify-content-center align-items-center">
                        <li class="nav-item" v-for="(link, index) in menuLinks" :key="index">
                            <router-link :to="{ name: link.routeName }" active-class="my-active" class="nav-link">
                                {{ link.label }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'AppHeader',
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
                    label: "About",
                    routeName: "about",
                },
                {
                    label: "Contacts",
                    routeName: "contact",
                },
            ],
        };
    },
    }
</script>

<style lang="scss" scoped>
.navbar {
  padding: 2rem;
  background-color: #f5f6f7;
  height: 100px;
}
.navbar-collapse {
  align-items: center;
  justify-content: space-between;  
}
</style>