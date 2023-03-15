const Facturas = require('../models/factura');

const { model } = require('mongoose');

const { json } = require('body-parser');

require('dotenv').config();

exports.insertData = (async (request, response) => {
    const {productos, totalDolars, totalBolivares, estado, direccion, metodo, usuario, metodoDePago, numeroRef, id } = request.body
    if (metodo === "post" || metodo === "") {
      const factura = new Facturas({
        productos,
        totalDolars,
        totalBolivares,
        direccion,
        estado,
        usuario,
        metodoDePago,
        numeroRef,
    });
    const savedfactura = await factura.save();
    return response.status(200).json({savedfactura});
    } else {
        const aja = await Facturas.findById(id, (err, docs) => {
          return response.status(200).json({docs})
        });
        
    }
    
    });

    
    
exports.getData = (async (request, response) => {
    const data = request.body
    Facturas.find({data}, (err, docs) =>  {
      console.log(docs);
      response.send({
        docs
      })
    })
  });