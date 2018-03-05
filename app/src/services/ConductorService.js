import Vue from "vue";

export default {
  getById(id) {
    return Vue.http.get("conductores/" + id);
  },
  get() {
    return Vue.http.get("conductores");
  },
  post(conductor) {
    return Vue.http.post("conductores", conductor);
  },
  delete(item) {
    return Vue.http.delete("conductores/" + item);
  }
};
