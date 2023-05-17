const express = require("express");
const router = express.Router();
const productController = require("../controllers/Product");

// Route to create a new product
router.post("/", productController.createProduct);

// Route to get all products
router.get("/", productController.getAllProducts);

// Route to get a single product by ID
router.get("/:id", productController.getProductById);

// Route to update a product by ID
router.put("/:id", productController.updateProductById);

// Route to delete a product by ID
router.delete("/:id", productController.deleteProductById);

module.exports = router;
