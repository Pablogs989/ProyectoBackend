const express = require("express");
const CategoryController = require("../controllers/CategoryController");
const router = express.Router();

router.get("/", CategoryController.getAll);
router.post("/", CategoryController.create);
router.put("/id/:id", CategoryController.update);
router.delete("/id/:id", CategoryController.delete);
router.get("/id/:id", CategoryController.getById);
router.get("/name", CategoryController.getByName);

module.exports = router;