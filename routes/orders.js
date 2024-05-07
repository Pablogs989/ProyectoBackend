const express = require("express");
const OrderController = require("../controllers/OrderController");

const router = express.Router();

router.get("/", OrderController.getAll);
router.post("/", OrderController.create);

module.exports = router;