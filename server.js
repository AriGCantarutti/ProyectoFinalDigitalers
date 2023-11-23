//Conectamos la aplicación a la base de datos MongoDB
require('./models/db');

//Importamos módulos
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');

const orderController = require('./controllers/orderController');
const routes = require('./router/routes');
const dotenv = require('dotenv');
dotenv.config();

//Configuramos variable del puerto
const PORT = process.env.PORT || 3000;

//Configuramos e inicializamos Express.js
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use(cookieParser());
app.use(bodyparser.urlencoded({ 
    extended: true 
}));
app.use(bodyparser.json());

app.use('/', routes);

app.post('/update-order', orderController.updateOrder);
app.post('/insert-order', orderController.insertOrder);
//app.post('/login', loginController.login);

app.listen(3000,()=>{
    console.log('Server on port: 3000');
});
