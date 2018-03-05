<template>
    <div class="row">
        <div class="col-md-12">
            <form class="row" @submit.prevent="guardarFlota">
                <div class="form-group col-md-6">
                    <label>Placa</label>
                        <input type="text" class="form-control" required maxlength="20" v-model="flota.Placa">
                </div>
                <div class="form-group col-md-6">
                    <label>Ciudad</label>
                    <select class="form-control" 
                           v-model="flota.Ciudad"
                            required>
                        <option :value="ciudad" v-for="(ciudad,index) in ciudades" :key="index">
                            {{ciudad}}
                        </option>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label>Modelo</label>
                    <input type="text" class="form-control" required v-model="flota.Modelo">
                </div>
                <div class="form-group col-md-12">
                    <button class="btn btn-primary" type="submit">Guardar</button>
                </div>
            </form>                  
        </div>
    </div>
</template>
<script>
import FlotaService from "./../services/FlotaService";

export default {
  props: {
    flota: {
      default: {
        Placa: null,
        Modelo: null,
        Ciudad:'Pamplona'
      }
    }
  },
  data() {
    return {
      ciudades: ["Pamplona", "Bogota", "Bucaramanga"]
    };
  },
  created(){
      if(!this.flota.Placa){
          this.flota.Ciudad = this.ciudades[0];

      }
  },
  methods: {
    guardarFlota() {
      FlotaService.post(this.flota).then(() => {
        this.$emit("cerrarModal", true);
      });
    }
  }
};
</script>

