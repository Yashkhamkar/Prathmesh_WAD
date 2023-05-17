const Product = require('../models/Product'); // Replace with the correct path to your product model

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, price, stock, imageUrl, description } = req.body;
    const product = await Product.create({
      name,
      price,
      stock,
      imageUrl,
      description
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create the product' });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
};

// Get a specific product by ID
const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve the product' });
  }
};

// Update a product by ID
const updateProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, price, stock, imageUrl, description } = req.body;
    const product = await Product.findByIdAndUpdate(
      productId,
      { name, price, stock, imageUrl, description },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the product' });
  }
};

// Delete a product by ID
const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the product' });
  }
};


module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById
};
