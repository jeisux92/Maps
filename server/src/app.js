const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
var mongoose = require("mongoose");

var Conductor = require("./../models/conductor");
var Flota = require("./../models/flota");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/conductores");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
  console.log("Connection Succeeded");
});

app.get("/conductores", (req, res) => {
  Conductor.find({}, function(error, conductores) {
    console.log(conductores);
    if (error) {
      console.error(error);
    }
    res.send({
      conductores: conductores
    });
  }).sort({ _id: -1 });
});

app.get("/conductores/:id", (req, res) => {
  Conductor.find({ _id: req.params.id }, function(error, conductor) {
    if (error) {
      console.error(error);
    }
    res.send({
      conductor: conductor
    });
  }).sort({ _id: -1 });
});

app.post("/conductores", (req, res) => {
  var db = req.db;
  var Nombre = req.body.Nombre;
  var Apellidos = req.body.Apellidos;
  var TipoDocumento = req.body.TipoDocumento;
  var NumDocumento = req.body.NumDocumento;
  var Telefono = req.body.Telefono;
  var Flota = req.body.Flota;
  var Origen = req.body.Origen;
  var Destino = req.body.Destino;

  var new_post = new Conductor({
    Nombre: Nombre,
    Apellidos: Apellidos,
    TipoDocumento: TipoDocumento,
    NumDocumento: NumDocumento,
    Telefono: Telefono,
    Flota: Flota,
    Origen: Origen,
    Destino: Destino
  });

  console.log(new_post);
  new_post.save(function(error) {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: "Post saved successfully!"
    });
  });
});

app.delete("/conductores/:id", (req, res) => {
  var db = req.db;
  Conductor.remove(
    {
      _id: req.params.id
    },
    function(err, post) {
      if (err) res.send(err);
      res.send({
        success: true
      });
    }
  );
});



//Flotas
app.get("/flotas", (req, res) => {
  Flota.find({}, function(error, flotas) {
    if (error) {
      console.error(error);
    }
    res.send({
      flotas: flotas
    });
  }).sort({ _id: -1 });
});

app.get("/flotas/:id", (req, res) => {
  Flota.find({ _id: req.params.id }, function(error, flota) {
    if (error) {
      console.error(error);
    }
    res.send({
      flota: flota
    });
  }).sort({ _id: -1 });
});

app.post("/flotas", (req, res) => {
  var db = req.db;
  var Placa = req.body.Placa;
  var Ciudad = req.body.Ciudad;
  var Modelo = req.body.Modelo;
 

  var new_flota = new Flota({
    Placa: Placa,
    Ciudad: Ciudad,
    Modelo: Modelo
  });

  new_flota.save(function(error) {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: "Flota guardada con exito!"
    });
  });
});

app.delete("/flotas/:id", (req, res) => {
  var db = req.db;
  console.log(req.params.id);
  Flota.remove(
    {
      _id: req.params.id
    },
    function(err, post) {
      if (err) res.send(err);
      res.send({
        success: true
      });
    }
  );
});


app.listen(process.env.PORT || 8081);
