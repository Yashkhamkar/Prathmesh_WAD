const Message = require('../models/Message');

// Create a new message
const createMessage = async (req, res) => {
  const { name, title, message } = req.body;

  try {
    const newMessage = new Message({
      name,
      title,
      message,
    });

    await newMessage.save();
    res.status(200).send('Message saved successfully');
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).send('Error saving message');
  }
};

// Retrieve all messages
const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find({});
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error retrieving messages:', error);
    res.status(500).send('Error retrieving messages');
  }
};

module.exports = { createMessage, getAllMessages };
