const Checkout = require('../models/Checkout');

// Create operation
async function createCheckout(req, res) {
  try {
    const checkoutData = req.body; // Assuming the request body contains the checkout data
    const checkout = await Checkout.create(checkoutData);
    res.status(201).json(checkout);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the checkout' });
  }
}

// Read operation - Get all checkouts
async function getAllCheckouts(req, res) {
  try {
    const checkouts = await Checkout.find();
    res.json(checkouts);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the checkouts' });
  }
}

// Read operation - Get a specific checkout
async function getCheckout(req, res) {
  try {
    const checkoutId = req.params.id; // Assuming the checkout ID is passed as a route parameter
    const checkout = await Checkout.findById(checkoutId);
    if (checkout) {
      res.json(checkout);
    } else {
      res.status(404).json({ error: 'Checkout not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the checkout' });
  }
}

// Update operation
async function updateCheckout(req, res) {
  try {
    const checkoutId = req.params.id; // Assuming the checkout ID is passed as a route parameter
    const updatedData = req.body; // Assuming the request body contains the updated checkout data
    const checkout = await Checkout.findByIdAndUpdate(checkoutId, updatedData, {
      new: true,
    });
    if (checkout) {
      res.json(checkout);
    } else {
      res.status(404).json({ error: 'Checkout not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the checkout' });
  }
}

// Delete operation
async function deleteCheckout(req, res) {
  try {
    const checkoutId = req.params.id; // Assuming the checkout ID is passed as a route parameter
    const checkout = await Checkout.findByIdAndDelete(checkoutId);
    if (checkout) {
      res.json({ message: 'Checkout deleted successfully' });
    } else {
      res.status(404).json({ error: 'Checkout not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the checkout' });
  }
}

module.exports = {
  createCheckout,
  getAllCheckouts,
  getCheckout,
  updateCheckout,
  deleteCheckout,
};
