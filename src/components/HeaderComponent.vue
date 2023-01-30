<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-light">
            <div class="container dist">
                <div class="navbar-collapse" id="navbar-toggler">
                    <h1>BEAUTIFLIE</h1>
                    <ul class="navbar-nav d-flex justify-content-center align-items-center">
                        <li class="nav-item "  v-for="(item, index) in menuLinks" :key="index">
                            <router-link :to="{ name: item.routeName }" active-class="my-active" class="my-nav ">
                                {{ item.label }}
                            </router-link>
                        </li>
                    </ul>
                    <div class="cerca">
                      
                            <input class="form-control me-2" type="search" placeholder="Cerca" aria-label="Search">
                           
                       
                    </div>
                    
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
                    label: "Prodotti",
                    routeName: "products",
                },
                {
                    label: "Contattaci",
                    routeName: "contact",
                }, 
                // {
                //     label: "Brands",
                //     routeName: "brands",
                // },
               
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
//   background-color: #ef0288;
background-color: black;
 
  z-index: 1000;
}
.navbar-collapse {
  align-items: center;
  justify-content: space-between;  
}
.my-nav{
    color: white;
}
.my-nav:hover{
    color: pink;
}
h1{
    font-family: 'Itim', cursive;
    color:pink;
}
.dist{
  padding: 7px 0;
}
li{
    font-family: 'Itim', cursive;
    font-size: 20px;
}

.cerca{
    height: 40px;
    // background-color: #f2f2f2;
    // border:1px solid #bdbdbd;
    border-radius: 100% ;
  
 
}
input{
    height: 100%;
    border:1px solid black;
    border-radius: 40px;
 
}

.my-nav{
    display: block;
    padding: 0 0.8rem;
    font-size: var(--bs-nav-link-font-size);
    font-weight: var(--bs-nav-link-font-weight);
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color

}

.my-active{
    color: pink;
}
</style>