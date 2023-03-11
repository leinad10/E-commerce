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
    const aja = await Factura.find({}, (err, docs) => {
        console.log(docs);
    })
    console.log(aja);
    client.messages.create({
        body: 'Your appointment is coming up on July 21 at 3PM',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+584242155597'}).then(message => console.log(message.sid)).done();
    response.status(200).json({ok: "mensaje enviado"})

  });