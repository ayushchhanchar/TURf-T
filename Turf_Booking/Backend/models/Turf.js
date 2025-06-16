const mongoose = require('mongoose');

const TurfSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  availability: [{
    date: String,
    time: String
  }],
});

module.exports = mongoose.model('Turf', TurfSchema);