const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();
const { authentication, isAdmin } = require('../middleware/authentication')

router.get("/", ProductController.getAll);
router.post("/",authentication, isAdmin, ProductController.create);
router.put("/id/:id",authentication, isAdmin, ProductController.update);
router.delete("/id/:id", authentication, isAdmin, ProductController.delete);
router.get("/id/:id", ProductController.getById);
router.get("/name", ProductController.getByName);
router.get("/price", ProductController.getByPrice);
router.get("/priceDesc", ProductController.getAllPriceDesc);

module.exports = router;