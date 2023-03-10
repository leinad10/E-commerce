const Facturas = require('../models/facturas');

const { model } = require('mongoose');

const { json } = require('body-parser');

require('dotenv').config();

exports.insertData = (async (request, response) => {
    const {productos, totalDolars, totalBolivares, estado, direccion, metodo } = request.body
    const factura = {
        productos,
        totalDolars,
        totalBolivares,
        direccion,
        estado
    }
    const savedfactura = await factura.save();
    return response.status(200).json({savedfactura});
    });

    
    
exports.getData = (async (request, response) => {
    const data = request.body
    Products.find({data}, (err, docs) =>  {
      console.log(docs);
      response.send({
        docs
      })
    })
  });