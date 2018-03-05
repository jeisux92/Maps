var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    Placa: String,
    Ciudad: String,
    Modelo:Number
});

var Flota = mongoose.model("Flota", PostSchema);
module.exports = Flota;