const express = require("express");
const ReviewController = require("../controllers/ReviewController");
const router = express.Router();
const { authentication } = require('../middleware/authentication')

router.get("/", ReviewController.getAll);
router.post("/", authentication, ReviewController.create);
router.put("/id/:id", authentication, ReviewController.update);
router.delete("/id/:id", authentication, ReviewController.delete);

module.exports = router;