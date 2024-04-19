const mongoose = require('mongoose');
const { isEmail } = require('validator'); // Optional: for email validation

const roomSchema = new mongoose.Schema({
  roomname: {
    type: String,
    required: [true, 'Roomname is required'], // Makes the field mandatory
    unique: true, // Ensures usernames are unique
    trim: true, // Trims whitespace from the value   
  },
  discription: {
    type: String,
    required: [true, 'Discription is required'],
    unique: true,      
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    
  },
  capacity:{
    type : Number,
    required: [true, 'Capacity is required'],
  }
  // Add any additional fields as needed
}, {
  timestamps: true, // Automatically creates createdAt and updatedAt fields
});

const User = mongoose.model('Room', roomSchema);

module.exports = Room;
