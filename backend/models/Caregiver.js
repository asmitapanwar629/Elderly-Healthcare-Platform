const mongoose = require("mongoose");

const caregiverSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  qualification: {
    type: String,
    required: true
  },

  experience: {
    type: String,
    required: true
  }

});

module.exports =
mongoose.model(
  "Caregiver",
  caregiverSchema
);