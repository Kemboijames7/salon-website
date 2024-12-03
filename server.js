const functions = require("firebase-functions");
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const punycode = require('punycode');
const jwt = require('jsonwebtoken');  
const bcrypt = require('bcrypt');    

app.use(cors());
app.use(express.json());

// Example usage
const encodedDomain = punycode.encode('münich.com');
console.log(encodedDomain); // Output will be xn--mnich-kva.com

const decodedDomain = punycode.decode(encodedDomain);
console.log(decodedDomain); // Output will be münich.com


app.get("/api/hello", (req, res) => {
  res.send("Hello from the backend!");
});

exports.api = functions.https.onRequest(app);


const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }, // Role can be 'admin' or 'user'
});

const User = mongoose.model('User', UserSchema);

// Route: Admin Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
      const user = await User.findOne({ username });

      if (!user) {
          return res.status(404).json({ success: false, message: 'User not found' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }

      if (user.role !== 'admin') {
          return res.status(403).json({ success: false, message: 'Access restricted to admins only' });
      }

      // Generate a JWT for the admin
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
          expiresIn: '1h',
      });

      res.json({ success: true, token, user: { username: user.username, role: user.role } });
  } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

mongoose.connect(
  process.env.MONGODB_PASSWORD).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  })

  const BookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, required: true },
    service: { type: String, required: true },
    stylist: { type: String, required: false },
  });

  const Booking = mongoose.model('Booking', BookingSchema);

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Access token is required' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user data to the request
    next();
  } catch (error) {
    console.error('Invalid token:', error);
    res.status(403).json({ message: 'Invalid or expired token' });
  }
};

// Protect bookings route
app.get('/api/bookings', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }

    const bookings = await Booking.find().sort({ date: 1 });
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Error fetching bookings' });
  }
});




  app.post('/api/bookings', async (req, res) => {
    try {
      const { name, email, date, service, stylist } = req.body;
      const newBooking = new Booking({ name, email, date, service, stylist });
      await newBooking.save();
      res.json(newBooking);
} catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Error saving booking' });
  }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})

