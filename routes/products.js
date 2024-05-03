const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

router.get("/", ProductController.getAll);
router.post("/", ProductController.create);
router.put("/id/:id", ProductController.update);
router.delete("/id/:id", ProductController.delete);
router.get("/id/:id", ProductController.getById);
router.get("/name", ProductController.getByName);
router.get("/price", ProductController.getByPrice);
router.get("/priceDesc", ProductController.getAllPriceDesc);

module.exports = router;