const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    vehicleNumber: {
      type: String,
      required: true,
      unique: true,
    },

    model: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["Truck", "Van", "Mini Truck", "Tempo"],
      required: true,
    },

    capacity: {
      type: Number,
      required: true,
    },

    fuelType: {
      type: String,
      enum: ["Diesel", "Petrol", "Electric", "CNG"],
      required: true,
    },

    status: {
      type: String,
      enum: ["Available", "On Trip", "Maintenance"],
      default: "Available",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);