<template>
    <div class="row">
        <div class="col-md-12">
            <form class="row" @submit.prevent="guardarFlota">
                <div class="form-group col-md-6">
                    <label>Placa</label>
                        <input type="text" class="form-control" required minlength="6" maxlength="6" v-model.lazy="flota.Placa">
                </div>
                <div class="form-group col-md-6">
                    <label>Ciudad</label>
                    <select class="form-control" 
                           v-model.lazy="flota.Ciudad"
                            required>
                        <option :value="ciudad" v-for="(ciudad,index) in ciudades" :key="index">
                            {{ciudad}}
                        </option>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label>Modelo</label>
                    <input type="number" max="2020" min="1900" class="form-control" required v-model.number.lazy="flota.Modelo">
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
      required: true,
      default: {
        Ciudad: "Arauca"
      }
    },
    editar: {
      required: true
    }
  },
  data() {
    return {
      ciudades: ["Arauca", "Barranquilla", "Bogota", "Bucaramanga", "Pamplona"]
    };
  },
  methods: {
    guardarFlota() {
      this.flota.Placa = this.flota.Placa.toUpperCase();
      console.log(this.editar);
      if (this.editar) {
        console.log("editando");
        FlotaService.update(this.flota).then(() => {
          this.$emit("cerrarModal", true);
        });
      } else {
        console.log("creando");
        FlotaService.post(this.flota).then(() => {
          this.$emit("cerrarModal", true);
        });
      }
    }
  },
  created() {
    if (!this.editar) {
      this.flota.Ciudad = this.ciudades[0];
      this.flota.Placa = "";
      this.flota.Modelo = "";
    }
  },
  watch: {
    editar: function() {
      if (!this.editar) {
        this.flota.Ciudad = this.ciudades[0];
        this.flota.Placa = "";
        this.flota.Modelo = "";
      }
    }
  }
};
</script>

