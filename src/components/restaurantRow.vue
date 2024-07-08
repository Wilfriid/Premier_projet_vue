<template>
    <div class="restaurant--row ">
      <h2 class="title">
          Nos restaurants
         
      </h2>
      <div class="wrapper--card">
        <restaurantCart v-for="(card, index) in three_restaurant" :info_restaurant="card" :key="index"/>
      </div>
    </div>
  </template>

<script>
import restaurantCart from "./restaurantCart.vue";
export default {
name:"restaurantRow",
components:{
    restaurantCart
},
 props :{
  three_restaurant : Array
 }


}
</script>

<style lang="scss">
 .title{
    font-size: 2rem;
 }
 .restaurant--row{
    .wrapper--card{
      display: flex;
      align-items: center;
      justify-content: space-between;

      
      
    }
    
 }
</style>
