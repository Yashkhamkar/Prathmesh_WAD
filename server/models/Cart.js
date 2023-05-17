const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    default:1
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
  },
  name: {
    type: String,

  },
  price: {
    type: String,
    
  },
  stock: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  description: {
    type: String,
  },
});

itemSchema.pre("save", async function (next) {
  try {
    const product = await mongoose.model("Product").findById(this.product);
    if (!product) {
      throw new Error("Product not found");
    }
    this.name = product.name;
    this.price = product.price;
    this.stock = product.stock;
    this.imageUrl = product.imageUrl;
    this.description = product.description;

    next();
  } catch (error) {
    next(error);
  }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
