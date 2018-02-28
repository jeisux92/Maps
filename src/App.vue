<template>
  <div id="app">   
    <NavBar></NavBar>  
    <div class="container">
    <Conductores></Conductores>
    </div>
      <!-- <router-link>Go to Foo</router-link> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Conductores from './components/Conductores.vue';

export default {
  name: "app",
  components: {
    NavBar,
    Conductores
  }
};
</script>

<style>
.container{
  margin-top:35px;
}
</style>
