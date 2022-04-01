const mongoose = require('./conection'); 
const Schema = mongoose.Schema;

const Imagen = new Schema({
    tipo: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },    
});

const imagen_proyecto1 = mongoose.model('Imagen',new Schema(Imagen), 'Proyecto1');
module.exports = imagen_proyecto1;