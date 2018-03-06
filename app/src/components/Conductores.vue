<template>
  <div class="row">
      <div class="col-sm-12">
    <h2>Conductores</h2>
    <router-link class="btn btn-primary"
                  :to="{ name:'conductorCrear', params:{ id : 0 }}"
                   >
            <span class="fa fa-plus-square"></span>&nbsp;Agregar conductor
    </router-link>
    <hr>
    <table class="table table-hover table-dark" v-if="conductores.length>0">
    <thead>
      <tr class="text-center">
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apelligos</th>
        <th scope="col">Telefono</th>
        <th scope="col">Flota</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in conductores" v-bind:key="index" class="text-center">
        <th>{{index}}</th>
        <td>{{item.Nombre}}</td>
        <td>{{item.Apellidos}}</td>
        <td>{{item.Telefono}}</td>
        <td>{{item.Flota.Placa}}</td>

        <td>
          <router-link :to="{ name:'conductorInfo', params:{ id : item._id }}" class="btn btn-info" title="Ver">
            <span class="fa fa-eye"></span>
          </router-link>            
          <router-link :to="{ name:'conductorEditar', params:{ id : item._id }}" class="btn btn-primary" title="Editar">
            <span class="fa fa-pencil"></span>
          </router-link>            
          <button class="btn btn-danger" title="Borrar" @click="borrar(item._id)" type="button">
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
import ConductorService from "./../services/ConductorService";

export default {
  data() {
    return {
      conductores: []
    };
  },
  created() {
    this.cargarConductores();
  },
  methods: {
    borrar(index) {
      ConductorService.delete(index).then(() => this.cargarConductores());
    },
    cargarConductores() {
      ConductorService.get().then(x => {
        this.conductores = x.data.conductores;
      });
    },
  }
};
</script>

<style scoped>
td > a {
  color: white;
}
</style>
