var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    Nombre: String,
    Apellidos: String,
    TipoDocumento:String,
    NumDocumento:Number,
    Telefono:Number,
    Flota:String,
    Origen: Object,
    Destino:Object
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
