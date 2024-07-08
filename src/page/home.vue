<template>
  <div class="home">
    <div class="header">
      <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="" srcset="">
      <div class="wrapper--input">
       <input v-model="utilisateur_cherche_restaurant" type="text" placeholder="De quoi avez vous envie ?">
       <div class="search">
          <router-link 
            v-for="(restaurant,i) in search_restaurant" 
            :key="i" 
            :to="{name:'RestaurantComponent',params:{name: restaurant.name}}">
                <div class="container--restaurant--search">
                     <div class="wrapper--img">
                     <img :src="restaurant.image" alt="" srcset="">
                     </div>
                      <p>{{ restaurant.name }}</p>
                </div>     
    
          </router-link>
</div>
      </div>


    </div>
    <div class="banniere">

    </div>
    <restaurantRow v-for="(data, i) in data_restaurant" :key="i" :three_restaurant="data"/>
  </div>
</template>

<script>
// IMPORT
import BDD from "../BDD"
import { onMounted, ref, watch } from "vue"

// COMPONENTS
import restaurantRow from "../components/restaurantRow"
export default {
  name: "HomeComponent",
  components: {
    restaurantRow
  },
  setup() {
    class Restaurant {
      constructor(name, note, image, drive_time) {
        this.name = name
        this.note = note
        this.image = image
        this.drive_time = drive_time
      }
    }

    const data_restaurant = ref([])
    let all_restaurant = [];
    // arrow function condition, methode push, creation une fonction qui nous permet de trier et deplacer des data ds nos applis
    const makeDataRestaurant = () => {
      let three_restaurant = [];

      for (const restaurant of BDD) {
        const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time);

      // tout les resto dans un tableau
      all_restaurant.push(new_restaurant);



        if (three_restaurant.length === 2) {
          three_restaurant.push(new_restaurant);
          data_restaurant.value.push(three_restaurant);
          three_restaurant = [];
        } else {
          three_restaurant.push(new_restaurant);
        }
      }
    }
// Utiisateur cherche restaurant
let utilisateur_cherche_restaurant = ref('');
let search_restaurant = ref([]);

watch(utilisateur_cherche_restaurant,new_Value => {
    let regex = RegExp(new_Value.toLowerCase());

    let new_search_restaurant = all_restaurant.filter(restaurant => regex.test(restaurant.name.toLowerCase()))

    search_restaurant.value = new_search_restaurant;
    
    if (new_Value == 0){
      search_restaurant.value =[]
    }
    else{
      search_restaurant.value = new_search_restaurant;
    }
    // condition terniere
    // new_Value == 0 ? search_restaurant.value = [] :search_restaurant.value = new_search_restaurant;

})




    onMounted(makeDataRestaurant);

    return {
      data_restaurant,
      utilisateur_cherche_restaurant,
      search_restaurant,
    }
  }
}
</script>

<style lang="scss">
 .home {
  .header{
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 200px;
    }

    .wrapper--input{
      position: relative;
    input {
      background-color: #f6f6f6;
      border:none;
      height: 30px;
      width: 300px;
      outline: none;
      padding: 20px;
    }
    .search{
      position: absolute;
      top: 100%;
      width: 100%;
      
      background-color: #ffffff;
      
      

      .container--restaurant--search{
        display: flex;
        align-items: center;
        padding: 10px;
        
         &:hover{
          background:#f6f6f6;
         }

        .wrapper--img{
          height: 50px;
          width: 50px;
          margin-right: 20px;
          border-radius:50% ;
          overflow: hidden;
       
             img{
              height: 100%;
              width: auto;
            }
          }

      }
    }
  }

  }
  .banniere {
      height: 200px;
      width: 100%;
      background-image:url("https://as1.ftcdn.net/v2/jpg/03/66/44/62/1000_F_366446282_dNpbd5rJvhFI1fBsdFvSDWkVzC6k0XAT.jpg");
      background-position:  center;
      background-size: cover;
    }
 }
</style>
