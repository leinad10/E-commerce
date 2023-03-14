const Products = require('../models/products');
const bcrypt = require('bcrypt');
const { model } = require('mongoose');
const nodemailer = require("nodemailer");
const { json } = require('body-parser');

require('dotenv').config();

exports.insertData = (async (request, response) => {
    console.log(request)
    const {name, value, image, description, category, metodo, id} = request.body
      if (metodo==="post" || metodo==="") {
        const productsExist = await Products.findOne({ productName: name });
      if (productsExist) {
        response.status(400).json({error : "Ya existe un producto con ese nombre"})
      }
      const product = new Products({
        productName: name,
        productValue: value,
        productImage: image,
        decription: description,
        category: category,
      });
      const savedProduct = await product.save();
      return response.status(200).json({savedProduct});
      } else {
        
        console.log(request.body);
        const aja = await Products.findById(id);
        console.log(aja);
        response.status(200).json(aja);
      }
    });

    
    
exports.getData = (async (request, response) => {
    const data = request.body
    Products.find({}, (err, docs) =>  {
      console.log(docs);
      response.send({
        docs
      })
    })
  });