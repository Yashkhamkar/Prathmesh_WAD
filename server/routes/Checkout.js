const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/Checkout');

// Create a new checkout
router.post('/checkout', checkoutController.createCheckout);

// Get all checkout
router.get('/checkout', checkoutController.getAllCheckouts);

// Get a specific checkout by ID
router.get('/checkout/:id', checkoutController.getCheckout);

// Update a checkout by ID
router.put('/checkout/:id', checkoutController.updateCheckout);

// Delete a checkout by ID
router.delete('/checkout/:id', checkoutController.deleteCheckout);

module.exports = router;
