const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  mediaPath: String,
  description: String,
  likes: { type: Number, default: 0 },
  shares: { type: Number, default: 0 },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
