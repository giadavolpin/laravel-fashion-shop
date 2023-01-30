<template>

<div class="">
  <img class="jumbo" src="../assets/img/pexels-anderson-guerra-1115128.jpg" alt="">
  <div class="d-flex justify-content-center">
      <h2 class="pt-4 pb-4">Scopri i nostri Prodotti!</h2>
    </div>   
    <div class="container pb-5">
      <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :slidesPerGroup="3"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(product) in products ">
      <div class="card-front card-block d-flex flex-column ">
        <div>
          <router-link :to="{ name: 'single-product', params: { id: product.id } }">
            <img :src="`${store.imageUrl}${product.image_link}`" :alt="product.name" class="card-image" />
          </router-link>
        </div>
        <div>
          <strong class="centro"> {{ product.name }} </strong>
        </div>
        <div>
          <strong class="centro"> {{ product.price }} €</strong>
        </div>
      </div>
    </swiper-slide>
    </swiper>
    </div>
    
          
    <!-- <button class="pre-btn"><img src="../assets/img/arrow.png" alt=""></button>
        <button class="nxt-btn"><img src="../assets/img/arrow.png" alt=""></button> -->
      </div>
       
<!-- </div> -->
</template>

<script>

 import axios from "axios";
import { store } from "../store";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

    export default {
        name: 'HomePage',
        props: ['product'],
        components: {
          Swiper,
    SwiperSlide,
        },
        setup(){
          return{
            modules:[Pagination, Navigation],
          }
        },
        data(){
            return{
                store,
                products: [],
                contentMaxLen: 80,
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
        },
        slider(){
          
           }
        },
        mounted() {
            this.getProducts(1);
        },
    }
  </script>

<style lang="scss" scoped>
@use '../assets/styles/partials/style.scss' as *;




ul li {
  list-style: none ;
}



img{
  max-width: 100%;
}



.jumbo{
    height: 400px;
    width: 100%;
    object-fit: cover;
  }


  
  h2{
    font-family: 'Itim', cursive;
    // font-family: 'Montserrat', sans-serif;
    font-size: 50px;
    color: black;
    margin-top: 20px;
  }






  img{
    width: 50%;
    height: 250px;
    object-fit: cover;
}




body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

swiper {
  width: 100%;
  height: 100%;
}

// swiper-slide {
//   text-align: center;
//   font-size: 18px;
//   background: #fff;

//   /* Center slide text vertically */
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: -webkit-flex;
//   display: flex;
//   -webkit-box-pack: center;
//   -ms-flex-pack: center;
//   -webkit-justify-content: center;
//   justify-content: center;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   -webkit-align-items: center;
//   align-items: center;
// }



.card-front{
text-align: center;
height: 350px;
// position: absolute;
width: 100%;
backface-visibility: hidden;
}


</style>