// routes/cart.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/Cart');

// Add a product to the cart
router.post("/cart", cartController.createItem);
router.get('/cart',cartController.getAllItems)
router.delete('/cart/:id',cartController.deleteItem)
router.put("/cart/:itemId/inc", cartController.incrementQuantity);
router.put("/cart/:itemId/dec", cartController.decrementQuantity);
router.get('/cart/count', cartController.countCartItems);

module.exports = router;
