const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  variants: {
    colors: [{ name: String, code: String }],
    sizes: [String]
  }
});

module.exports = mongoose.model('Product', ProductSchema);
