import Vue from "vue";

export default {
  getById(id) {
    return Vue.http.get("flotas/" + id);
  },
  get() {
    return Vue.http.get("flotas");
  },
  post(flota) {
    return Vue.http.post("flotas", flota);
  },
  delete(item) {
    return Vue.http.delete("flotas/" + item);
  },
  update(flota) {
    return Vue.http.put("flotas/" + flota._id, flota);
  }
};
