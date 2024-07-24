const express = require('express');
const router = express.Router();

const deathController = require("../controllers/DeathController");

router.post("/death-create", deathController.deathCreate );

module.exports = router;