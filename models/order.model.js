//Importa el controlador de conexión Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    total: Number,
    order: Number
});

module.exports = mongoose.model('Order', OrderSchema);
