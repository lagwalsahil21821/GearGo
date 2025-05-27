const express = require('express');
const router = express.Router();

router.use('/products', require('./products'));
router.use('/orders', require('./orders'));
router.use('/auth', require('./auth'));
router.use('/admin', require('./admin'));
router.use('/rider', require('./rider'));

module.exports = router;
