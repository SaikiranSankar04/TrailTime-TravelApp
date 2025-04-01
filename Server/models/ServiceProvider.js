// Server/models/ServiceProvider.js
const mongoose = require('mongoose');
const generateUniqueId = require('../utils/generateUniqueId');

const serviceProviderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    uniqueId: { type: String, unique: true },
    companyName: { type: String, required: true },
    location: { type: String, required: true },
});

module.exports = mongoose.model('ServiceProvider', serviceProviderSchema);
