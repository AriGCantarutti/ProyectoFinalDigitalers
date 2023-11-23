
const express = require('express');
const router = express.Router();
const Order = require('../models/order.model');
const orderController = require('../controllers/orderController');
const { login } = require('../controllers/loginControllers');

//Router
router.get('/', (req, res) => {
    res.render('menu');
});

router.get('/cart', (req, res) => {
    res.render('cart');
});

router.get('/orders', (req, res) => {
    res.render('orders');
});

router.get('/admin', (req, res) => {
    Order.find({})
    .then(docs => {
       res.render('admin',{
        order:docs
    });
    })
    .catch(err => {
        console.log('Error en orden: ' + err);
    });
});

router.get('/order/:id',(req, res)=>{
    Order.findById(req.params.id)
    .exec()
    .then(doc => {
        if(doc){
            res.render('orders',{order:doc});
        }else{
            console.log('Error findbyId: Document not found');
        }
    })
    .catch(err => {
        console.log('Error findbyId: ' + err);
    });
});

router.get('/order/delete/:id', (req,res)=>{
    Order.findByIdAndRemove(req.params.id)
    .exec()
    .then(doc => {
        if(doc){
            res.redirect('/admin');
        }else{
            console.log('Error in delete: Document not found');
        }
    })
    .catch(err => {
        console.log('Error in delete: ' + err);
    });
});

router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Iniciar sesion',
  });
});

//POST
router.post('/cart', orderController.insertOrder);
router.post('/order', orderController.updateOrder);
router.post('/login', login)

module.exports = router; 