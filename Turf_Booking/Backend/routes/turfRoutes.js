const express = require('express');
const Turf = require('../models/Turf');
const authMiddleware = require('../middleware/authMiddleWare');
const router = express.Router();

// Create a turf admin

router.post('/create', authMiddleware, async (req, res) => {
    const role = req.user.role;
    if (role !== 'admin') {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const { name, location, price, availability } = req.body;
    const turf = new Turf({ name, location, price, availability });
    try {
        await turf.save();
        res.status(201).json({ message: 'Turf created successfully' });
    } catch (error) {
        res.status(404).json({ message: 'Turf creation failed' });
    }
});

// Get all turfs
router.get('/', async (req, res) => {
    try {
        const turfs = await Turf.find();
        res.json(turfs);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Update Turf (Admin only)
router.put('/:id', authMiddleware, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }

    const { name, location, price } = req.body;
    try {
        const turf = await Turf.findByIdAndUpdate(req.params.id, { name, location, price },{ new: true });
        res.json({ message: 'Turf updated', turf });
    } catch (error) {
        res.status(400).json({ error: 'Error updating turf' });
    }
});

// Delete Turf (Admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }

    try {
        await Turf.findByIdAndDelete(req.params.id);
        res.json({ message: 'Turf deleted' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting turf' });
    }
});

module.exports = router;