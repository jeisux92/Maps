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

  new_post.save(function(error) {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: "Conductor guardadocon exito!"
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

app.put("/conductores/:id", (req, res) => {
  var db = req.db;
  Conductor.findById(req.params.id, function(error, conductor) {
    if (error) {
      console.error(error);
    }

    conductor.Nombre = req.body.Nombre;
    conductor.Apellidos = req.body.Apellidos;
    conductor.TipoDocumento = req.body.TipoDocumento;
    conductor.NumDocumento = req.body.NumDocumento;
    conductor.Telefono = req.body.Telefono;
    conductor.Flota = req.body.Flota;
    conductor.Origen = req.body.Origen;
    conductor.Destino = req.body.Destino;

    conductor.save(function(error) {
      if (error) {
        console.log(error);
      }
      res.send({
        success: true
      });
    });
  });
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
  var query = req.params.id == 0 ? {} : { _id: req.params.id };

  Flota.find(query, function(error, flota) {
    if (error) {
      console.error(error);
    }
    if (req.params.id == 0) {
      Conductor.find({}, function(error, conductor) {
        if (error) {
          console.log(error);
        }
        if(flota){
        flota = flota.filter(x => {
          return conductor.findIndex(c => c.Flota.Placa == x.Placa) == -1;
        });
      }
        res.send({
          flotas: flota
        });
      });
    } else {
      res.send({
        flota: flota
      });
    }
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

      // Conductor.find({  }, function(error, conductores) {
      //   if (error) {
      //     console.error(error);
      //   }

      //   var conductor = conductores.find(x=>x.Flota._id = req.params.id);
      //   if(conductor){

      //     conductor.Flota = null;
      //     conductor.save(function(error) {
      //       if (error) {
      //         console.log(error);
      //       }
      //       res.send({
      //         success: true
      //       });
      //     });
      //   }         
      // });
      res.send({
        success: true
      });
    }
  );
});

app.put("/flotas/:id", (req, res) => {
  var db = req.db;
  Flota.findById(req.params.id, function(error, flota) {
    if (error) {
      console.error(error);
    }

    flota.Placa = req.body.Placa;
    flota.Ciudad = req.body.Ciudad;
    flota.Modelo = req.body.Modelo;
    flota.save(function(error) {
      if (error) {
        console.log(error);
      }
      res.send({
        success: true
      });
    });
  });
});

app.listen(process.env.PORT || 8081);
