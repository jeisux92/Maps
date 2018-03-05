<template>
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="form-group col-md-6">
                    <label>Placa</label>
                        <input type="text" class="form-control" required maxlength="20" v-model="flota.Placa">
                </div>
                <div class="form-group col-md-6">
                    <label>Ciudad</label>
                    <select class="form-control" 
                            required>
                        <option :value="index" v-for="(ciudad,index) in ciudades" :key="index">
                            {{ciudad}}
                        </option>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label>Modelo</label>
                    <input type="text" class="form-control" required v-model="flota.Modelo">
                </div>    
            </div>                  
        </div>
    </div>
</template>
<script>
export default {
  props: ["flota"],
  data() {
    return {
      ciudades: ["Pamplona", "Bogota", "Bucaramanga"]
    };
  }
};
</script>

