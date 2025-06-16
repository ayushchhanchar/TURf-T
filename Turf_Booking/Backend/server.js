const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const turfRoutes = require('./routes/turfRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('./Config/Passport');  
const path = require('path');
const cors = require('cors');


// Load environment variables
dotenv.config({ path: "./vars/.env" });

const app = express();
app.use(express.json());
app.use(cookieParser('secret'));
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true 
}));


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}))
// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

app.get('/api/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']

}));


app.get('/api/auth/google/callback', passport.authenticate('google', {
  failureRedirect: '/login',
}), (req, res) => {
  res.redirect('http://localhost:5173/oauth-redirect');  
});



// Routes
app.use('/api/auth', authRoutes);
app.use('/api/turfs', turfRoutes);
app.use('/api/bookings', bookingRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
