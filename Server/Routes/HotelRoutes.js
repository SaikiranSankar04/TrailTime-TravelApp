const express = require('express');

const HotelModel = require('../models/Hotels');


const router = express.Router();
// Server/Routes/HotelRoutes.js
router.post('/add', async (req, res) => {
  const { name, location, description, imageUrl, amenities, serviceProviderId } = req.body;

  const newHotel = new HotelModel({
    name,
    location,
    description,
    imageUrl,
    amenities,
    serviceProviderId,
  });

  try {
    await newHotel.save();
    res.status(201).json({ message: 'Hotel added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding hotel', error });
  }
});
// Update an existing hotel
router.put('/update/:id', async (req, res) => {
    try {
        const updatedHotel = await HotelModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedHotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.json(updatedHotel);
    } catch (error) {
        res.status(500).json({ message: 'Error updating hotel', error });
    }
});

// Delete a hotel
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedHotel = await HotelModel.findByIdAndDelete(req.params.id);
        if (!deletedHotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.json({ message: 'Hotel deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting hotel', error });
    }
});

module.exports = router;
