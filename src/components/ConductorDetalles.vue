<template>
  <div class="row">
      <div class="col-sm-12">
          <h2>Detalles</h2>
          <hr>
          <div class="row">
            <div class="col-sm-12 col-md-6">
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
            </div>
            <div class="col-sm-12 col-md-6 text-center">
                <Maps @coordinates='coordinates' :origen="conductor.Origen" :destino="conductor.Destino" :edit="false"></Maps>
            </div>
          </div>
          <hr>
          <div class="row">
              <div class="col-md-12">
                    <router-link to="/Conductores" class="btn btn-warning"><span class="fa fa-arrow-left"></span>Regresar</router-link>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import Maps from "./Maps.vue";
export default {
  components: {
    Maps
  },
  data() {
    return {
      coordinatesMap: {},
      conductor: {
        Nombre: "Gabriel",
        Apellidos: "Martinez",
        TipoDocumento: "CC",
        NumDocumento: "1094269885",
        Telefono: 3057376957,
        Flota: 78327,
        Origen: { lat: 4.659841, lng: -74.052056 },
        Destino: { lat: 4.679453364341739, lng: -74.05383426198136 }
      }
    };
  },
  methods: {
    coordinates(item) {
      this.coordinatesMap = item;
    }
  }
};
</script>