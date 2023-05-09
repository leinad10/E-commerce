const mongoose = require('mongoose');

const imagenesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

imagenesSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Imagen = mongoose.model('Imagen', imagenesSchema);

module.exports = Imagen;