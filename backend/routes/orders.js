const express = require('express');
const Order = require('../models/Order');
const { ensureAuth } = require('../utils/auth');
const router = express.Router();

// POST /api/orders - create order
router.post('/', ensureAuth, async (req, res) => {
  try {
    const { items } = req.body;
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Order items required' });
    }
    const order = new Order({ user: req.user._id, items });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// GET /api/orders - get orders for user (admin/rider can see all)
router.get('/', ensureAuth, async (req, res) => {
  try {
    let orders;
    if (req.user.role === 'admin' || req.user.role === 'rider') {
      orders = await Order.find().populate('user').populate('items.product');
    } else {
      orders = await Order.find({ user: req.user._id }).populate('items.product');
    }
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;
