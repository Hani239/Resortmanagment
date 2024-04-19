const mongoose = require('mongoose');
const { isEmail } = require('validator'); // Optional: for email validation

const foodSchema = new mongoose.Schema({
  foodname: {
    type: String,
    required: [true, 'Roomname is required'], // Makes the field mandatory
    unique: true, // Ensures usernames are unique
    trim: true, // Trims whitespace from the value   
  },
  category:{
    type : String,
    required: [true, 'Category is required'],
  }
  discription: {
    type: String,
    required: [true, 'Discription is required'],
        
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    
  },
  
  // Add any additional fields as needed
}, {
  timestamps: true, // Automatically creates createdAt and updatedAt fields
});

const User = mongoose.model('Food', foodSchema);

module.exports = Food;
