const Item = require("../models/Cart");

// Create a new item
const createItem = async (req, res) => {
  try {
    
    const { quantity, product } = req.body;

    // Create a new item instance
    const newItem = new Item({
      quantity,
      product,
    });

    // Save the item
    await newItem.save();

    res.status(201).json({ message: "Item created successfully", item: newItem });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create item" });
  }
};

// Get a single item by ID
const getItemById = async (req, res) => {
  try {
    const { itemId } = req.params;

    const item = await Item.findById(itemId);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json({ item });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve item" });
  }
};


const countCartItems = async (req, res) => {
  try {
    const itemCount = await Item.countDocuments();
    res.json({ count: itemCount });
  } catch (error) {
    res.status(500).json({ message: 'Failed to count cart items', error: error.message });
  }
};

// Update an item by ID
const updateItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { quantity, product } = req.body;

    const item = await Item.findByIdAndUpdate(
      itemId,
      {
        quantity,
        product,
      },
      { new: true }
    );

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json({ message: "Item updated successfully", item });
  } catch (error) {
    res.status(500).json({ error: "Failed to update item" });
  }
};


  const deleteItem = async (req, res) => {
    const itemId = req.params.id;

    try {
      // Find the item by ID and remove it from the cart
      await Item.findByIdAndRemove(itemId);

      res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'An error occurred while deleting the item' });
    }
  }

// Get all items
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();

    res.json({ items });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve items" });
  }
};


// Increment the quantity of an item
const incrementQuantity = async (req, res, next) => {
  try {
    const itemId = req.params.itemId;
    const item = await Item.findOne({ _id: itemId });
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    item.quantity++;
    await item.save();

    res.json(item);
  } catch (error) {
    next(error);
  }
};

// Decrement the quantity of an item
const decrementQuantity = async (req, res, next) => {
  try {
    const itemId = req.params.itemId;
    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    
    if (item.quantity > 0) {
      item.quantity--;
      await item.save();
    }
    
    res.json(item);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createItem,
  getItemById,
  updateItem,
  deleteItem,
  getAllItems,
  incrementQuantity,
  decrementQuantity,
  countCartItems
};

