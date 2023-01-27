<template>

<div class="body">
  <div class=""> 
    <div class="gallery pt-2"> </div>
     <div class="d-flex" > 
      <ul class="d-flex justify-content-start flex-wrap justify-content-between p-2 m-3">
        <li class="m-3 lens"><a href="#"><img src="../assets/img/summer-collection.jpg" alt=""></a></li>
        <li class="m-3 lens"><a href="#"><img src="../assets/img/beach-bride.jpg" alt=""></a></li>
        <li class="m-3 lens"><a href="#"><img src="../assets/img/motherhood-apparel.jpg" alt=""></a></li>
        <li class="m-3 lens"><a href="#"><img src="../assets/img/fashionable.jpg" alt=""></a></li>
        <li class="m-3 lens"><a href="#"><img src="../assets/img/accessories.jpg" alt=""></a></li>
        <li class="m-3 lens"><a href="#"><img src="../assets/img/skin-perfect.jpg" alt=""></a></li>
      </ul>
    </div>
  </div>
  <div class="">
    <div class="first">
      <h2>Please Read</h2>
      <p>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.</p>
      <p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us.</p>
      <p>If you're having problems editing this website template, then don't hesitate to ask for help on the Forum.</p>
      <p>Before using a template from Free Website Templates, you must read all the for further information terms of Use</p>
    </div>
    <div class="pb-3">
      <h2>Sed Elementum</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum nibh eget justo dapibus eu porttitor purus hendrerit.</p> 
    </div>
    </div>   
</div>
</template>

  <script>
  export default {
    name: "HomePage",
  };
  </script>

  <style lang="scss" scoped>
@use '../assets/styles/partials/style.scss' as *;

ul li {
  list-style: none ;
}
.gallery{
  height: 470px;
  background-image: url("../assets/img/aurora.jpg"); 
  background-repeat: no-repeat;
  background-size: 1000px 562px ;
}
</style>