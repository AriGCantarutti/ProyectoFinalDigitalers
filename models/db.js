//Importa el controlador de conexión Mongoose
const mongoose = require('mongoose');
require('dotenv').config();

//Establecemos conexión con la base de datos
const MONGOATLAS = process.env.MONGO_URL_ATLAS;
const conexion = mongoose.connect(MONGOATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conexión a la base de datos establecida con éxito');
}).catch(err => console.log(err));;

module.exports = conexion;