const fetch = require("node-fetch");
const Factura = require('../models/factura');
const bcrypt = require('bcrypt');
const { model } = require('mongoose');
const nodemailer = require("nodemailer");
const { json } = require('body-parser');
require('dotenv').config();
const client = require('twilio')(process.env.accountSid, process.env.authToken);




    
    
exports.insertData = (async (request, response) => {
    const {id} = request.body
    const aja = await Factura.findById(id);
    console.log(aja);
    client.messages.create({
        body:  `Tienes un nuevo pedido: ${aja.productos}, metodo: ${aja.metodoDePago},
        total bs: ${aja.totalBolivares}, numero de referencia: ${aja.numeroRef}`,
        from: 'whatsapp:+584242155597',
        to: 'whatsapp:+584120299927'}).then(message => console.log(message.sid)).done();
    response.status(200).json({ok: "mensaje enviado"})
  });

  exports.insertData = (async (req, res) => {
        Factura.find({}, (err, docs) =>  {
        console.log(docs);
        response.send({
          docs
        })
      })
  })