<template>
  <div class="row">
    <div class="col-sm-12">
      <h2>Conductores</h2>
      <hr>
      <table class="table table-hover table-dark">
        <thead>
          <tr class="text-center">
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apelligos</th>
            <th scope="col">Telefono</th>
            <th scope="col">Flota</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in conductores" v-bind:key="index" class="text-center">
            <th>{{index}}</th>
            <td>{{item.Nombre}}</td>
            <td>{{item.Apellidos}}</td>
            <td>{{item.Telefono}}</td>
            <td>{{item.Flota}}</td>
            <td>
              <router-link :to="{ name:'conductorInfo', params:{ id : index }}" class="btn btn-info" title="Ver">
                <span class="fa fa-eye"></span>
              </router-link>            
              <router-link :to="{ name:'conductorEditar', params:{ id : index }}" class="btn btn-primary" title="Editar">
                <span class="fa fa-pencil"></span>
              </router-link>            
              <button class="btn btn-danger" title="Borrar">
                <span class="fa fa-trash"></span>
              </button>
            </td>
          </tr>
        </tbody>
      </table> 
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
      conductores: [
        {
          Nombre: "Gabriel",
          Apellidos: "Martinez",
          TipoDocumento: "CC",
          NumDocumento: "1094269885",
          Telefono: 3057376957,
          Flota:8773
        },
        {
          Nombre: "Luisa",
          Apellidos: "Sacristan",
          TipoDocumento: "CC",
          NumDocumento: "1094269885",
          Telefono: 3201920120,
          Flota:32
        },
        {
          Nombre: "Hacer",
          Apellidos: "Tasci",
          TipoDocumento: "CC",
          NumDocumento: "1094269885",
          Telefono: 3109210920,
          Flota:54
        }
      ]
    };
  }  
};
</script>

<style scoped>
td > a {
  color: white;
}
</style>
