<template>
  <div class="row">
      <div class="col-md-12">
          <h2>Detalles</h2>
          <hr>
          <div class="row">
            <div class="col-md-6">
                <dl class="row">
                    <dt class="col-sm-3">Nombre</dt>
                    <dd class="col-sm-9">{{conductor.Nombre | uppercase}}</dd>
                </dl>
                <dl class="row">
                    <dt class="col-sm-3">Apellidos</dt>
                    <dd class="col-sm-9">{{conductor.Apellidos | uppercase}}</dd>
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
                    <dt class="col-sm-3">Celular</dt>
                    <dd class="col-sm-9">{{conductor.Telefono}}</dd>
                </dl>
                <dl class="row">
                    <dt class="col-sm-3">Flota</dt>
                    <dd class="col-sm-9">{{conductor.Flota.Placa}}</dd>
                </dl>
                <router-link to="/Conductores" class="btn btn-warning">
                <span class="fa fa-arrow-left"></span>&nbsp;
                Regresar
                </router-link>
                <router-link :to="{ name:'conductorEditar', params:{ id : conductor._id }}" class="btn btn-primary" title="Editar">
                              <span class="fa fa-pencil"></span>&nbsp;
                              Editar
                </router-link>            

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
    Maps
  },
  data() {
    return {
      coordinatesMap: {},
      conductor: {
        Flota: {
          Placa: ""
        }
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
      if (!x.data.conductor[0].Flota) {
        x.data.conductor[0].Flota = {
          Placa: ""
        };
      }
      this.conductor = x.data.conductor[0];
    });
  }
};
</script>
