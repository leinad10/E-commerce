const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:  {
        type: String,
        unique: true
    },
    productValue: {
        type: String,
        required: true
    },
    productImage : {
        type: String,
        required: true
    },
    decription: {
        type: String,
    },
    available: {
        type: Boolean,
        default: true
    },
});

productSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Products = mongoose.model('Products', productSchema);

module.exports = Products;