const mongoose = require('mongoose');

const ApprovedEmailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'rider', 'customer'], default: 'customer' }
});

module.exports = mongoose.model('ApprovedEmail', ApprovedEmailSchema);
