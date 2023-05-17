const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
});

const Message = mongoose.model('Message', reviewSchema);

module.exports = Message;
