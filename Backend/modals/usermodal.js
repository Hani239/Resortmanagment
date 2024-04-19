const mongoose = require('mongoose');
const { isEmail } = require('validator'); // Optional: for email validation

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'], // Makes the field mandatory
    unique: true, // Ensures usernames are unique
    trim: true, // Trims whitespace from the value
    lowercase: true, // Converts the username to lowercase
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email'], // Uses 'validator' to check for a valid email format
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Minimum password length is 6 characters'], // Password length validation
  },
  address:{
    type : String,
    required: [true, 'Address is required'],
  },
  phone:{
    type : Number,
    required: [true, 'Phone Number is required'],
  }
  // Add any additional fields as needed
}, {
  timestamps: true, // Automatically creates createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;
