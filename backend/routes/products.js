const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// GET /api/products - list all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// GET /api/products/:id - get product detail
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let product = null;
    if (id.length === 24) {
      product = await Product.findById(id);
    }
    if (!product) {
      product = await Product.findOne({ id });
    }
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
