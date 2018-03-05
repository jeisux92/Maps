<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand" exact>
        <img src="./../assets/logo.png" width="30" height="30" alt="">  
    </router-link>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link active-class="active" exact class="nav-link" to="/">Inicio</router-link>
        <!-- <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a> -->
      </li>
      <li class="nav-item">
        <router-link active-class="active" class="nav-link" to="/Conductores">Conductores</router-link>
      </li>
      <li class="nav-item">
        <router-link active-class="active" class="nav-link" to="/Flotas">Flotas</router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  </div>
</nav>
</template>
<script>
export default {
  mounted() {},
  created() {}
};
</script>
