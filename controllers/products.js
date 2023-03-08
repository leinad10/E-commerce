const Products = require('../models/products');
const bcrypt = require('bcrypt');
const { model } = require('mongoose');
const nodemailer = require("nodemailer");
require('dotenv').config();

exports.insertData = (async (request, response) => {
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
        Products.findById(id), (err, docs) => {
          if (err) {
            
            console.log(err);
            return response.status(400).json({error: 'la cagaste'})
          }
          return response.status(200).json({docs})
        }
      }
    });

    
    
exports.getData = (async (request, response) => {
    const data = request.body
    Products.find({data}, (err, docs) =>  {
      response.send({
        docs
      })
    })
  });