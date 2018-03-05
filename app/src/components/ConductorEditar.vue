<template>
  <div class="row">
      <div class="col-md-12">
        <h2>{{editar?"Editar conductor":"Crear conductor"}}</h2>
        <hr>
        {{editar}}
        <div class="row">
            <div class="col-md-6">
                <form id="form" @submit.prevent="guardarUsuario">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Nombre</label>
                            <input type="text" class="form-control" required maxlength="20" v-model="conductor.Nombre">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="apellidos">Apellidos</label>
                            <input id="apellidos" type="text" class="form-control" required maxlength="20" v-model="conductor.Apellidos">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Tipo de documento</label>
                            <select class="form-control" required v-model="conductor.TipoDocumento">
                                <option :value="item" v-for="(item,index) in tipoDocumento" :key="index">{{item}}</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputAddress2">Número de documento</label>
                            <input type="text" class="form-control" required v-model="conductor.NumDocumento">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Telefono</label>
                            <input type="text" class="form-control" required v-model="conductor.Telefono">
                        </div>
                        <div class="form-group col-md-6">
                            <label>Flota</label>
                            <select class="form-control" required v-model="conductor.Flota">
                                <option :value="flota.Placa" v-for="(flota,index) in flotas" 
                                :key="index">{{flota.Placa}}</option>
                            </select>
                        </div>
                    </div>
                    
                            <label>Seleccion tipo de coordenada y oprima<br> en donde desea guardarla</label>
                            <br>
                            <button type="button" :class="{'btn-primary':conductor.Origen,'btn-outline-primary':!conductor.Origen}" class="btn " @click.prevent="conductor.Origen? conductor.Origen=null :set(true)">Origen</button>
                            <button type="button" :class="{'btn-secondary':conductor.Destino,'btn-outline-secondary':!conductor.Destino}" class="btn" @click.prevent="conductor.Destino? conductor.Destino=null :set(false)">Destino</button>
                   
                </form>
                 <br>
            </div>
            <div class="col-md-6">
                <Maps :edit="true" 
                :origen="conductor.Origen" :destino="conductor.Destino"
                @coordinates="getCoordinates" ></Maps>    
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
      <pre>{{conductor.Origen}}</pre>
      <pre>{{conductor.Destino}}</pre>
  </div>
</template>
<script>
import Maps from "./Maps";
import ConductorService from "./../services/ConductorService";

export default {
  components: {
    Maps
  },
  data() {
    return {
      conductor: {
        Origen: null,
        Destino: null,
        TipoDocumento: "CC"
      },
      editar: false,
      coordenadas: null,
      load: true,
      origen: null,
      destino: null,
      ubicacion: "origen",
      tipoDocumento: ["CC", "CE", "TI", "Pasaporte"],
      flotas: []
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
        this.conductor.Origen = this.coordenadas;
      } else {
        this.conductor.Destino = this.coordenadas;
      }
      this.coordenadas = null;
    },
    guardarUsuario() {
      if (this.conductor.Origen && this.conductor.Destino) {
        ConductorService.post(this.conductor).then(x => {
          this.$router.push({ name: "Conductores" });
        });
      } else {
        alert("Seleccione un origen y una ubicación");
      }
    }
  },
  mounted() {
    this.flotas = [
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
    ];

    this.conductor.Flota = this.flotas[0].Placa;
  },
  created() {
    if (this.$route.params.id != 0) {
      ConductorService.getById(this.$route.params.id).then(x => {
        this.conductor = x.data.conductor[0];
        this.editar = true;
        this.conductor.Origen = null;
        this.conductor.Destino = null;
      });
    }
  }
};
</script>