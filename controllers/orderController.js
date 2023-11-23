const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const Order = require('../models/order.model');

//Funciones
exports.updateOrder = async(req,res) =>{
    Order.findOneAndUpdate({_id:req.body._id},req.body,{new:true})
    .exec()
    .then(doc => {
        if(doc){
            res.redirect('/admin');
        }else{
            console.log('Error in update: Document not found');
        }
    })
    .catch(err => {
        console.log('Error in update: ' + err);
    });
}

exports.insertOrder = async(req,res) => {
    var d= new Date();
    var t = d.getTime();
    var counter = t;
    counter += 1;
    var order = new Order();
    order.total = req.body.total;
    order.order = counter;
    order.save().then(res => {
        console.log('order: ' + order);
        res.redirect('/admin');
       }).catch(err => {
        console.log('Error insertando orden');
       });
}