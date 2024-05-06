const express = require("express");
const OrderController = require("../controllers/OrderController");

const router = express.Router();

router.get("/", OrderController.getAll);


module.exports = router;