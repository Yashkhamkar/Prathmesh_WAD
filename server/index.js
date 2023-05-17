const express = require('express');
const cors = require("cors")
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/Product')
const messageRoutes = require("./routes/Review")
const cartRoutes = require('./routes/Cart')
const checkoutRoutes = require('./routes/Checkout')
const app = express();
const connectToDatabase = require('./db/connection');

// Other middleware and configurations
app.use(cors());
app.use(express.json());
connectToDatabase();
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes); 
app.use('/api', cartRoutes); 
app.use('/api', checkoutRoutes);
app.use('/messages', messageRoutes);
// Start the server
app.listen(8800, () => {
  console.log('Server is running on port 8800');
});
