<template>
  <div class="row">
    <div class="col-sm-12">
      <h2>Flotas</h2>
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
                <router-link :to="{ name:'flotaInfo', params:{ id : index }}" class="btn btn-info" title="Ver">
                  <span class="fa fa-eye"></span>
                </router-link>            
                <router-link :to="{ name:'conductorEditar', params:{ id : index }}" class="btn btn-primary" title="Editar">
                  <span class="fa fa-pencil"></span>
                </router-link>            
                <button class="btn btn-danger" title="Borrar">
                  <span class="fa fa-trash"></span>
                </button>
              </td>
            </tr>
          </tbody>
      </table>
    </div>

    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

  <!-- Modal -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          sa
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>


  </div>
</template>
<script>
export default {
  data() {
    return {
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
  }
};
</script>

