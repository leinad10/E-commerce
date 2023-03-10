const fetch = require("node-fetch");
const bcrypt = require('bcrypt');
const { model } = require('mongoose');
const nodemailer = require("nodemailer");
const { json } = require('body-parser');

require('dotenv').config();



    
    
exports.getData = (async (request, response) => {
     const aja = await (fetch('https://bcv-api.deno.dev/v1/exchange/Dolar', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
        mode: "cors"
        }));
        const ajaJSON = await aja.json();
        response.send({ajaJSON});
        console.log(ajaJSON);
  });