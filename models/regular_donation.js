const mongoose = require('mongoose')

const regularDonation = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  amount: {
    type: String,
    required: true
  },
  lastPayment: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('regular_donation', regularDonation)
