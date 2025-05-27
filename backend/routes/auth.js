const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ApprovedEmail = require('../models/ApprovedEmail');
const router = express.Router();

// Google OAuth setup
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: '/login' }), async (req, res) => {
  try {
    // Only allow approved emails
    const approved = await ApprovedEmail.findOne({ email: req.user.email });
    if (!approved) return res.status(403).json({ error: 'Email not approved' });
    // Issue JWT
    const token = jwt.sign({ id: req.user._id, role: req.user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Authentication failed' });
  }
});

module.exports = router;
