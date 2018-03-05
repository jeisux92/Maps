<template>
  <div class="row">
      <div class="col-md-12">
          <h2>Detalles</h2>
          <hr>
          <div class="row">
            <div class="col-md-6">
                <dl class="row">
                    <dt class="col-sm-3">Nombre</dt>
                    <dd class="col-sm-9">{{conductor.Nombre}}</dd>
                </dl>
                <dl class="row">
                    <dt class="col-sm-3">Apellidos</dt>
                    <dd class="col-sm-9">{{conductor.Apellidos}}</dd>
                </dl>
                <dl class="row">
                    <dt class="col-sm-3">Tipo de documento</dt>
                    <dd class="col-sm-9">{{conductor.TipoDocumento}}</dd>
                </dl>
                <dl class="row">
                    <dt class="col-sm-3">Numero de documento</dt>
                    <dd class="col-sm-9">{{conductor.NumDocumento}}</dd>
                </dl>
                <dl class="row">
                    <dt class="col-sm-3">Telefono</dt>
                    <dd class="col-sm-9">{{conductor.Telefono}}</dd>
                </dl>
                <dl class="row">
                    <dt class="col-sm-3">Flota</dt>
                    <dd class="col-sm-9">{{conductor.Flota}}</dd>
                </dl>
                <router-link to="/Conductores" class="btn btn-warning"><span class="fa fa-arrow-left"></span>&nbsp;Regresar</router-link>
            </div>
            <div class="col-md-6 text-center">
                <Maps :origen="conductor.Origen" :destino="conductor.Destino" :edit="false" v-if="conductor.Origen"></Maps>
            </div>
          </div>
      </div>
      
  </div>
</template>
<script>
import Maps from "./Maps.vue";
import ConductorService from "./../services/ConductorService";

export default {
  components: {
    Maps:()=> import("./Maps.vue")
  },
  data() {
    return {
      coordinatesMap: {},
      conductor: {
          
      }
    };
  },
  methods: {
    coordinates(item) {
      this.coordinatesMap = item;
    }
  },
  created() {
    ConductorService.getById(this.$route.params.id).then(x => {
      this.conductor = x.data.conductor[0];
    });
  }
};
</script>
