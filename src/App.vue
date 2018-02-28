<template>
  <div id="app">   
    <NavBar></NavBar>  
    <Maps></Maps>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Maps from "./components/Maps.vue";
export default {
  name: "app",
  components: {
    NavBar,
    Maps
  }
};
</script>

<style>

</style>
