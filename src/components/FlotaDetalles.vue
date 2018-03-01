<template>
    <div class="row">
        <div class="col-md-12">
            <h2>Detalles</h2>
            <hr>
            <div class="row">
                <div class="col-md-6">
                    <dl class="row">
                        <dt class="col-sm-3">Placa</dt>
                        <dd class="col-sm-9">{{flota.Placa}}</dd>
                    </dl>
                    <dl class="row">
                        <dt class="col-sm-3">Ciudad</dt>
                        <dd class="col-sm-9">{{flota.Ciudad}}</dd>
                    </dl>
                    <dl class="row">
                        <dt class="col-sm-3">Modelo</dt>
                        <dd class="col-sm-9">{{flota.Modelo}}</dd>
                    </dl>
                    <router-link to="/Flotas" class="btn btn-warning"><span class="fa fa-arrow-left"></span>Regresar</router-link>
                </div>
            </div>                  
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      flota: {
        Placa: "LOP697",
        Ciudad: "Bogota",
        Modelo: 1794
      }
    };
  }
};
</script>

