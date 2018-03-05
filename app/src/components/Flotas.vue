<template>
    <div class="row">
        <div class="col-sm-12">
        <h2>Flotas</h2>
        <button class="btn btn-primary"
                data-toggle="modal" 
                @click="flota={}"
                data-target="#detallesFlota"        >
            <span class="fa fa-plus-square"></span>&nbsp;Agregar flota
        </button>
        <hr>
            <table class="table table-hover table-dark">
                <thead>
                    <tr class="text-center">
                        <th scope="col">#</th>
                        <th scope="col">Placa</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="(item, index) in flotas" :key="index" class="text-center">
                        <th>{{index}}</th>
                        <td>{{item.Placa}}</td>
                        <td>{{item.Ciudad}}</td>
                        <td>{{item.Modelo}}</td>
                        <td>
                            <button
                            class="btn btn-secondary" 
                            title="Editar"
                            @click="flota=flotas[index]"
                            data-toggle="modal" 
                            data-target="#detallesFlota"
                            >
                            <span class="fa fa-pencil"></span>
                            </button>                  
                            <button class="btn btn-danger" title="Borrar">
                            <span class="fa fa-trash"></span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="modal fade" id="detallesFlota" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h2 class="modal-title" id="exampleModalLabel">Detalles</h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                <FlotaDetalles :flota="flota"></FlotaDetalles>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import FlotaDetalles from "./FlotaDetalles.vue";

export default {
  components: {
    FlotaDetalles
  },

  data() {
    return {
      flota: {},
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
      ],
      x: {
        Placa: "DRS097",
        Ciudad: "Bogota",
        Modelo: 1794
      }
    };
  }
};
</script>

