const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  hospitalName: { type: String, required: true },
  username: { type: String, required: true }, // Changed from userID to username
  email: { type: String, required: true },
  address: {
    locality: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
  },
  hospitalID: { type: String, unique: true, required: true }, // Unique hospital ID
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;
