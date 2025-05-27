const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'rider', 'customer'], default: 'customer' },
  displayName: String
});

module.exports = mongoose.model('User', UserSchema);
