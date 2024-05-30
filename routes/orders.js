const express = require("express");
const OrderController = require("../controllers/OrderController");
const { authentication } = require("../middleware/authentication");

const router = express.Router();

router.get("/", OrderController.getAll);
router.post("/", authentication, OrderController.create);

module.exports = router;