const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const PORT = process.env.PORT || 5000;
// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Register a new user
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send({ message: 'User already exists' });
  }

  // Encrypt password and save new user
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();
  res.status(201).send({ message: 'User registered successfully' });
});

// Google Login (Check or Register)
app.post('/google-login', async (req, res) => {
  const { email, name, googleId, profilePicture } = req.body;

  let user = await User.findOne({ email });
  
  if (!user) {
    // Register new Google user
    user = new User({ name, email, googleId, profilePicture });
    await user.save();
  } else if (!user.googleId) {
    // Update existing email-registered user to link Google ID
    user.googleId = googleId;
    user.profilePicture = profilePicture;
    await user.save();
  }

  res.send(user);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});