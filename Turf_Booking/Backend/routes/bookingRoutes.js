const express = require('express');
const Booking = require('../models/Booking');
const authMiddleware = require('../middleware/authMiddleWare');
const router = express.Router();

// Create Booking
router.post('/book', authMiddleware, async (req, res) => {
    const { turfId, date, time } = req.body;
    const booking = new Booking({ turfId, userId: req.user._id, date, time });

    try {
        await booking.save();
        res.json({ message: 'Booking successful' });
    } catch (error) {
        res.status(400).json({ error: 'Error creating booking' });
    }
});

// Get User Bookings
router.get('/', authMiddleware, async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user._id }).populate('turfId');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});


module.exports = router;