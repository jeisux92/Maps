<template>
  <div class="row">
      <div class="col-md-6">
              <div class="jumbotron">
              </div>
   
      </div>
      <div class="col-md-6">
        <Maps @coordinates='coordinates'></Maps>
      </div>
      {{coordinatesMap}}
  </div>
</template>
<script>
import Maps from "./Maps.vue";

export default {
  data() {
    return {
      coordinatesMap: {}
    };
  },
  components: {
    Maps
  },
  methods: {
    coordinates(item) {
      this.coordinatesMap = item;
    }
  }
};
</script>

