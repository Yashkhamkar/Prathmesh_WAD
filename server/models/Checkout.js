const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  address: {
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zipCode: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
  },
  cardDetails: {
    cardNumber: {
      type: String,
      required: true
    },
    cardholderName: {
      type: String,
      required: true
    },
    expirationDate: {
      type: String,
      required: true
    },
    cvv: {
      type: String,
      required: true
    },
  },
});

const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = Checkout;
