const mongoose = require('./conection'); 
const Schema = mongoose.Schema;

const Proyecto1 = new Schema({
    tipo: {
        type: String,
        required: true
    },
    puesto: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    carnet: {
        type: String,
        required: true
    },
    curso: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    
});

const proyecto1 = mongoose.model('Proyecto1',new Schema(Proyecto1), 'Proyecto1');
module.exports = proyecto1;