const express = require('express');
const router = express.Router();
const messageController = require('../controllers/Review');

// Create a new message
router.post('/', messageController.createMessage);

// Retrieve all messages
router.get('/', messageController.getAllMessages);

module.exports = router;
