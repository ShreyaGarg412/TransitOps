const express = require("express");
const router = express.Router();

const {
  addDriver,
  getDrivers,
  getDriverById,
  updateDriver,
  deleteDriver,
} = require("../controllers/driverController");

router.post("/", addDriver);
router.get("/", getDrivers);
router.get("/:id", getDriverById);
router.put("/:id", updateDriver);
router.delete("/:id", deleteDriver);

module.exports = router;