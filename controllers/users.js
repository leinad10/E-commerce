const User = require('../models/user');
const bcrypt = require('bcrypt');
const { model } = require('mongoose');
const nodemailer = require("nodemailer");
require('dotenv').config();

exports.insertData = (async (request, response) => {

  const { username, email, codeNumber, phone, password } = request.body;
  const userExist = await User.findOne({ username });

  const isCorrect = /^(?=.*[a-z])(?=.*[0-9])(?=.*[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]).{6,24}$/;
  if (userExist) {
    return response.status(400).json({ error: 'Username already exist' });
  } else if (!(username && password)) {
    return response.status(400).json({ error: 'Username and password are required' });
  } else if (!isCorrect.test(password)) {
    return response.status(400).json({ error: 'Password needs to be at least 6 characters long, include 1 number, 1 letter and 1 special character' });
  }
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  //   // User creation in MongoDB
  const numberPhone = `${codeNumber}-${phone}`
  const user = new User({
    username,
    email,
    numberPhone,
    passwordHash,
  });

  // Send user
  const savedUser = await user.save();
  return response.status(200).json({savedUser});
  }
);

  // User.create(username, email, passwordHash, (err, docs) => {
  //   if (err) {
  //     console.log('error')
  //   ;}  response.send({data: docs})
  // })





exports.getData = (async (request, response) => {
  const data = request.body
  User.find({data}, (err, docs) =>  {
    response.send({
      docs
    })
  })
});



