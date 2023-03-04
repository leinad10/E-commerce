const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.insertData = (async (req, res) => {
    const username = req.body
    const cooki = req.cookies
    console.log(cooki);
    const token = cooki[`acces-token-${username.username}`]
    console.log(token);
    if (!token) {
        res.status(400).json({error : "Acceso Denegado"})
        }
    jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
        res.status(400).json({error: "Acceso denegado o token expirado"})
    } else {
        res.status(200).json({ok:"Acceso garantizado"})
    }
    })
});


exports.changeData = (req,res) => {
    const username = req.body
    const cooki = req.cookies
    const token = cooki[`acces-token-${username.username}`]
    if (!token) {
        res.status(400).json({error : "Acceso Denegado"})
        }
    jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
        res.status(400).json({error: "Acceso denegado o token expirado"})
    } else {
        User.updateOne({ username : username },
            body,
            (err,docs) => {
                if (err) {
                  console.log(err);
                }
                console.log(docs);
                res.send({
                  items: docs   
                })
            }
            )
    }
    })
  }