<template>
  <div class="row">
      <div class="col-md-12">
        <h2>Editar</h2>
        <hr>
        <div class="row">
            <div class="col-md-6">
                <form id="form">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Nombre</label>
                            <input type="text" class="form-control" required maxlength="20">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="apellidos">Apellidos</label>
                            <input id="apellidos" type="text" class="form-control" required maxlength="20">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Tipo de documento</label>
                            <select class="form-control" required>
                                <option :value="item" v-for="(item,index) in tipoDocumento" :key="index">{{item}}</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputAddress2">Número de documento</label>
                            <input type="text" class="form-control" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Telefono</label>
                            <input type="text" class="form-control" required>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Flota</label>
                            <select class="form-control">
                                <option :value="flota" v-for="(flota,index) in flotas" 
                                :key="index">{{flota.Placa}}</option>
                            </select>
                        </div>
                    </div>
                    
                            <label>Seleccion tipo de coordenada y oprima<br> en donde desea guardarla</label>
                            <br>
                            <button type="button" :class="{'btn-primary':conductor.origen,'btn-outline-primary':!conductor.origen}" class="btn " @click="conductor.origen? conductor.origen=null :set(true)">Origen</button>
                            <button type="button" :class="{'btn-secondary':conductor.destino,'btn-outline-secondary':!conductor.destino}" class="btn" @click="conductor.destino? conductor.destino=null :set(false)">Destino</button>
                   
                </form>
                 <br>
            </div>
            <div class="col-md-6">
                <Maps :edit="true" @coordinates="getCoordinates"></Maps>    
            </div>                    
        </div>
        <hr>        
        <div class="row">
            <div class="col-md-6">
                <router-link class="btn btn-danger" to="/Conductores">
                    <span class=" fa fa-ban "></span>
                    Cancelar</router-link>
                <button class="btn btn-primary" form="form" type="submit">
                    <span class=" fa fa-save"></span>
                    Guardar</button>
            </div>
            <div class="col-md-6">
                
            </div>
        </div>
      </div>
      <pre>{{conductor.origen}}</pre>
      <pre>{{conductor.destino}}</pre>
  </div>
</template>
<script>
import Maps from "./Maps";
export default {
  components: {
    Maps
  },
  data() {
    return {
      conductor: {
        origen: null,
        destino: null
      },
      coordenadas: {},
      origen: null,
      destino: null,
      ubicacion: "origen",
      tipoDocumento: ["CC", "CE", "TI", "Pasaporte"],
      flotas: [
        {
          Placa: "XND897",
          Ciudad: "Bogota",
          Modelo: 1794
        },
        {
          Placa: "LOP697",
          Ciudad: "Bogota",
          Modelo: 1794
        },
        {
          Placa: "DRS097",
          Ciudad: "Bogota",
          Modelo: 1794
        }
      ]
    };
  },
  methods: {
    getCoordinates(coordenadas) {
      console.log(coordenadas);
      this.coordenadas = coordenadas;
    },
    set(state) {
      console.log(state + "&" + this.coordenadas);

      if (state) {
        this.conductor.origen = this.coordenadas;
      } else {
        this.conductor.destino = this.coordenadas;
      }
    }
  },
  mounted() {}
};
</script>