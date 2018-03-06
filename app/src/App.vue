<template>
  <div id="app">   
    <NavBar></NavBar>  
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar.vue";
import Conductores from "./components/Conductores.vue";

export default {
  name: "app",
  components: {
    Inicio,
    NavBar,
    Conductores
  }
};
</script>

<style>
.container {
  margin-top: 35px;
}
</style>
