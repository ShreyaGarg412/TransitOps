const Trip = require("../models/Trip");

// Create Trip
const createTrip = async (req, res) => {
  try {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Trips
const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find()
      .populate("driver")
      .populate("vehicle");

    res.json(trips);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Trip
const updateTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(trip);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Trip
const deleteTrip = async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.id);

    res.json({
      message: "Trip Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createTrip,
  getTrips,
  updateTrip,
  deleteTrip,
};