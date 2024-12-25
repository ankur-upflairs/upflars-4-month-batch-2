var express = require('express');
const { createProduct, deleteProduct } = require('../controllers/productController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home',{title:"E-commerce Home",products:[
    {id:1,name:"Product 1",price:100},
    {id:2,name:"Product 2",price:200},
    {id:3,name:"Product 3",price:300}
  ]});
});
router.get('/createproduct',(req,res)=>{
    res.render('products/createproduct');})
router.post('/createproduct',createProduct);
router.post('/deleteproduct/:id',deleteProduct);
module.exports = router;
