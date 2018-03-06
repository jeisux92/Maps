import Vue from "vue";

export default {
  getById(id) {
    return Vue.http.get("conductores/" + id);
  },
  get() {
    return Vue.http.get("conductores");
  },
  post(conductor) {
    console.log(conductor);
    return Vue.http.post("conductores", conductor);
  },
  delete(item) {
    return Vue.http.delete("conductores/" + item);
  },
  update(conductor) {
    console.log(conductor);
    return Vue.http.put("conductores/" + conductor._id, conductor);
  }
};
