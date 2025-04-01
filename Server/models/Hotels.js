const mongoose = require('mongoose');
const generateUniqueId = require('../utils/generateUniqueId');
const HotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
    amenities: { type: [String] },
    
    serviceProviderId: String,
    hotelUniqueId:{ type: String, unique: true }
});

const HotelModel = mongoose.model('Hotel', HotelSchema);
module.exports = HotelModel;
