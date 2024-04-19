// Assuming you have express set up
const express = require('express');
const router = express.Router();
const User = require('../modals/usermodal'); // Update the path to where your User model is located
const FoodCat = require('../modals/foodcat')  //Update the path to FoodCategory
const JWT_SECRET = 'yourSecretKey';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post("/createuser", async (req, res) => {
  try {
    const { username, email, password, address, phone } = req.body;

    // Check if user or email already exists
    const userExists = await User.findOne({ username });
    const emailExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists." });
    }

    if (emailExists) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({ username, email, password: hashedPassword, address, phone });
    const savedUser = await newUser.save();

    // Generate JWT for the new user
    const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token, user: { id: savedUser._id, username, email } }); // Respond with token and user info (excluding password)
  } catch (err) {
    res.status(500).json({ error: err.message || "An error occurred" });
  }

});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User does not exist." });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials." });

    // Generate JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, user: { id: user._id, username: user.username, email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/createroom", async (req, res) => {
  try {
    const { roomname,discription, price ,capacity } = req.body;

    // Check if room already exists
    const roomExists = await Room.findOne({ roomname });  

    if (roomExists) {
      return res.status(400).json({ message: "Room already exists." });
    }
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    // Create new Room
    const newRoom = new Room({  roomname,discription, price ,capacity });
    const savedRoom = await newRoom.save();

    // Generate JWT for the new user
    const token = jwt.sign({ id: savedRoom._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token, user: { id: savedRoom._id,  roomname,discription, price ,capacity} }); // Respond with token and room info 
  } catch (err) {
    res.status(500).json({ error: err.message || "An error occurred" });
  }
});


router.post("/foodcat", async (req, res) => {
  try {
    const { id, foodcatname, category, description, price } = req.body;

    // Check if user or email already exists
    const foodcatExists = await FoodCat.findOne({ foodcatname });
    // const userExists = await User.findOne({ username });
    const idExists = await User.findOne({ id });

    if (foodcatExists) {
      return res.status(400).json({ message: "Food Category already exists." });
    }

    if (idExists) {
      return res.status(400).json({ message: "ID already exists." });
    }

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

     // Create new food Category
     const newFoodCat = new FoodCat({ id, foodcatname, category, description, price });
     const savedFoodCat = await newFoodCat.save();

    // Generate JWT for the new user
    const token = jwt.sign({ id: savedFoodCat._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token, foodcat: { id: savedFoodCat._id, foodcatname: savedFoodCat.foodcatname, category, description, price } }); // Respond with token and user info (excluding password)
  } catch (err) {
    res.status(500).json({ error: err.message || "An error occurred" });
  }


  // try {
  //   const { id, foodcatname, category, description, price } = req.body;

  //   // Find user by email
  //   const foodcat = await FoodCat.findOne({ foodcatname });
  //   if (!foodcat) return res.status(400).json({ message: "Food Category does not exist." });

  //   // Check password
  //   // const isMatch = await bcrypt.compare(password, user.password);
  //   // if (!isMatch) return res.status(400).json({ message: "Invalid credentials." });

  //   // Create new food Category
  //   const newFoodCat = new FoodCat({ id, foodcatname, category, description, price });
  //   const savedFoodCat = await newFoodCat.save();

  //   // Generate JWT
  //   const token = jwt.sign({ id: foodcat._id }, JWT_SECRET, { expiresIn: '1h' });

  //   res.json({ token, foodcat: { id: foodcat._id, foodcatname: foodcat.foodcatname, category, description, price } });
  // } catch (err) {
  //   res.status(500).json({ error: err.message });
  // }
});


module.exports = router;