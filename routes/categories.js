const express = require("express");
const CategoryController = require("../controllers/CategoryController");
const router = express.Router();

router.get("/", CategoryController.getAll);
router.post("/", CategoryController.create);

module.exports = router;