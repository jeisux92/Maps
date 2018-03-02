<template>
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-6 ">
                    <dl class="row">
                        <dt class="col-sm-4">Placa</dt>
                        <dd class="col-sm-8">{{flota.Placa}}</dd>
                    </dl>
                    <dl class="row">
                        <dt class="col-sm-4">Ciudad</dt>
                        <dd class="col-sm-8">{{flota.Ciudad}}</dd>
                    </dl>                    
                </div>
                <div class="col-md-6">
                    <dl class="row">
                        <dt class="col-sm-4">Modelo</dt>
                        <dd class="col-sm-8">{{flota.Modelo}}</dd>
                    </dl>    
                </div>
            </div>                  
        </div>
    </div>
</template>
<script>
export default {
  props: [
    "flota"
  ]
};
</script>

