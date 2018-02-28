<template>
  <div class="row">
      <div class="col-md-12">
        <div id="map"></div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      map: {}
    };
  },
  methods: {
    initMap() {
      let markers = [];
      var uluru = { lat: -25.363, lng: 131.044 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru
      });

      map.addListener("click", function(e) {
        console.log(e);
        marked(e.latLng);
      });

      function marked(latLng) {
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
    }
  },
  computed: {},
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
}
</style>

