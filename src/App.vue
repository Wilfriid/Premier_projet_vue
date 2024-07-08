<template>
  <div id = "app">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  }

</script>

<style>
@import url('./style/reset.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700; 1 900&display=swap');


#app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        padding: 0px 20px ;
}
</style>