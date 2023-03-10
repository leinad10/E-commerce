const mongoose = require('mongoose');

const facturaSchema = new mongoose.Schema({
    productos: {
        type: Array,
        required: true,
    },
    totalDolars: {
        type: Number,
        required: true,
    },
    totalBolivares: {
        type: Number,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    }

});

facturaSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Facturas = mongoose.model('Facturas', facturaSchema);

module.exports = Facturas;