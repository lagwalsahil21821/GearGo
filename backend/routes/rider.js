const express = require('express');
const { ensureRider } = require('../utils/auth');
const Order = require('../models/Order');
const router = express.Router();

// GET /api/rider/orders - get all orders for riders
router.get('/orders', ensureRider, async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('items.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// PATCH /api/rider/orders/:id/status - update order status
router.patch('/orders/:id/status', ensureRider, async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) return res.status(400).json({ error: 'Status required' });
    const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update order status' });
  }
});

module.exports = router;
