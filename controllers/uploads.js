const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images/aja')
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({storage: storage})

exports.upload = upload.single("myFile")

exports.insertData = (async (request, response) => {
    response.send({ok: "jaja"})
    });

    
    
exports.getData = (async (request, response) => {
    const data = request.body
    
  });