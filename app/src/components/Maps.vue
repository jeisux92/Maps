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
  props: ["origen", "destino", "edit","recargar"],
  data() {
    return {
      coordinates: { lat: 4.659841, lng: -74.052056 }
    };
  },
  methods: {
    initMap() {
      var vm = this;
      GoogleMapsLoader.KEY = "AIzaSyCDZdUjTjjn_MgtB3MrfofJd0KS5CXW0uY";
      GoogleMapsLoader.load(function(google) {
        let markers = [];
        vm.coordinates = !vm.edit
          ? {
              lat: (vm.origen.lat + vm.destino.lat) / 2,
              lng: (vm.origen.lng + vm.destino.lng) / 2
            }
          : vm.coordinates;

        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 12,
          center: vm.coordinates
        });

        if (vm.edit) {
          map.addListener("click", function(e) {
            marked(e.latLng);
          });
        } else {
          var marker = new google.maps.Marker({
            position: vm.origen,
            title: "Origin"
          });
          marker.addListener("click", function() {
            infowindow.open(map, marker);
          });

          var infowindow = new google.maps.InfoWindow({
            content: "<strong>Origen</strong>"
          });

          marker.setMap(map);

          var marker2 = new google.maps.Marker({
            position: { lat: vm.destino.lat, lng: vm.destino.lng }
          });

          marker2.addListener("click", function() {
            infowindow2.open(map, marker2);
          });

          var infowindow2 = new google.maps.InfoWindow({
            content: "<strong>Destino</strong>"
          });

          marker2.setMap(map);
        }

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
    },
    wathc:{
      recargar:function(){
        this.initMap();
      }
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
  width: 400px;
  height: 400px;
  border: 1px #c2c0c0 solid;
  border-radius: 4px;
  box-shadow: 3px 3px #6c6161;
  /* margin: 0 auto; */
}
</style>

