const express = require('express');
const { ensureAdmin } = require('../utils/auth');
const Product = require('../models/Product');
const ApprovedEmail = require('../models/ApprovedEmail');
const router = express.Router();

// POST /api/admin/products - add product
router.post('/products', ensureAdmin, async (req, res) => {
  try {
    const { name, image, price, variants } = req.body;
    if (!name || !image || !price || !variants) {
      return res.status(400).json({ error: 'All product fields required' });
    }
    const product = new Product({ name, image, price, variants });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add product' });
  }
});

// POST /api/admin/approve-email - add approved email
router.post('/approve-email', ensureAdmin, async (req, res) => {
  try {
    const { email, role } = req.body;
    if (!email || !role) return res.status(400).json({ error: 'Email and role required' });
    const approved = new ApprovedEmail({ email, role });
    await approved.save();
    res.status(201).json(approved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to approve email' });
  }
});

module.exports = router;
