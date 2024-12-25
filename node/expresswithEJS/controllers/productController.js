// const Product = require('../models/product');

exports.createProduct = async (req, res) => {
    console.log(req.body);
    res.send('Product created successfully');
//   try {
//     const product = new Product({
//       name: req.body.name,
//       image: req.body.image,
//       description: req.body.description,
//       price: req.body.price,
//       brand: req.body.brand,
//     });
//     await product.save();
//     res.status(201).json({
//       message: 'Product created successfully',
//       product,
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Error creating product', error: err });
//   }
};
exports.deleteProduct = async (req, res) => {
    console.log(req.params.id);
    res.send('Product deleted successfully');
}