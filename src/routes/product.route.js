const express = require("express");
const {
  getProducts,
  getProductBySlug,
  getProductById,
} = require("../controllers/product.controller");

const router = express.Router();

router.get("/", getProducts);
router.get("/:slug", getProductBySlug);
router.get("/product/:id", getProductById)
router

module.exports = router;
