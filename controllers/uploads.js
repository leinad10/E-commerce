const multer = require('multer');
const Imagen = require('../models/images');
const { model } = require('mongoose');

let name = ""

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/aja')
    },
    filename: function async (req, file, cb) {
        const aja = file.originalname
        const originalNameWOSpaces = aja.replace(/\s/g, '')
        cb(null, `${originalNameWOSpaces}`)
        name = `${originalNameWOSpaces}` 
        
    }
})
const upload = multer({storage: storage})

exports.upload = upload.single("myFile")

exports.insertData = (async (request, response) => {
    const category = request.body
    const aja = category["category"]
    console.log(aja);
    console.log(request.body);
    const imagen = new Imagen({
        name,
        category : aja
      });
    
      // Send user
      const savedImagen = await imagen.save();
      return response.status(200).json({savedImagen});
      });

    
    
exports.getData = (async (request, response) => {
    const data = request.body
        Imagen.find({}, (err, docs) =>  {
          response.send({
            docs
          })
        })
      });