const express = require("express");
const LocationController = require("./controllers/LocationController");
const router = express.Router();

router.get('/get_location',LocationController.getLocation);

router.post("/update_location", LocationController.updateLocation);

module.exports = router