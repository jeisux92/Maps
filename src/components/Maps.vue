<template>
  <div class="row">
      <div class="col-md-12">
        <div id="map"></div>
      </div>
  </div>
</template>
<script>
import GoogleMapsLoader from "google-maps";

export default {
  data() {
    return {
      coordinates: { lat: 4.659841, lng: -74.052056 }
    };
  },
  methods: {
    initMap() {
      var vm = this;
      GoogleMapsLoader.load(function(google) {
        let markers = [];

        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 18,
          center: vm.coordinates
        });

        map.addListener("click", function(e) {
          marked(e.latLng);
        });

        function marked(latLng) {
          vm.coordinates = { lat: latLng.lat(), lng: latLng.lng() };
          vm.$emit("coordinates", vm.coordinates);
          clearMarkers();
          var marker = new google.maps.Marker({
            position: latLng,
            title: "Hello world"
          });
          markers.push(marker);
          marker.setMap(map);
        }

        function clearMarkers() {
          for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
          }
          markers = new Array();
        }
      });
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>
<style scoped>
#map {
  background-color: gray;
  width: 600px;
  height: 600px;
  border: 1px #c2c0c0 solid;
  border-radius: 4px;
  box-shadow: 3px 3px #6c6161;
}
</style>

