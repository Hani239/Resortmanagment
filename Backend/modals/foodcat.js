const mongoose = require('mongoose');
const { isEmail } = require('validator'); // Optional: for email validation

const foodCatSchema = new mongoose.Schema({
  id:{
      type : Number,
      required: [true, 'Enter the ID'],
      unique: true,
  },
  foodcatname: {
    type: String,
    required: [true, 'Food Category name is required'], // Makes the field mandatory
    unique: true, // Ensures usernames are unique
    trim: true, // Trims whitespace from the value
    lowercase: true, // Converts the username to lowercase
  },
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     unique: true,
//     lowercase: true,
//     validate: [isEmail, 'Please enter a valid email'], // Uses 'validator' to check for a valid email format
//   },
//   password: {
//     type: String,
//     required: [true, 'Password is required'],
//     minlength: [6, 'Minimum password length is 6 characters'], // Password length validation
//   },
  category:{
    type : String,
    required: [true, 'Category is required'],
  },
  description:{
    type : String,
    required: [true, 'Description is required'],
  },
  price:{
    type : Number,
    required: [true, 'Price is required'],
  }
  // Add any additional fields as needed
}, {
  timestamps: true, // Automatically creates createdAt and updatedAt fields
});

const FoodCat = mongoose.model('FoodCat', foodCatSchema);

module.exports = FoodCat;
