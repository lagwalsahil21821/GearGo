const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to ensure user is authenticated
async function ensureAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'No token' });
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(payload.id);
    if (!req.user) return res.status(401).json({ error: 'User not found' });
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Middleware for admin role
function ensureAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') return res.status(403).json({ error: 'Admin only' });
  next();
}

// Middleware for rider role
function ensureRider(req, res, next) {
  if (!req.user || req.user.role !== 'rider') return res.status(403).json({ error: 'Rider only' });
  next();
}

module.exports = { ensureAuth, ensureAdmin, ensureRider };
