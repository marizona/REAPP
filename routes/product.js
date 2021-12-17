const express = require("express");
const router = express.Router();


// controller
const {
  create,
  remove,
  read,
  update,
  list
} = require("../controllers/product");

// routes
router.post("/product",create);
router.delete("/product/:slug",remove);
router.get("/product/:slug",read);
router.put("/product/:slug",update);
router.post("/products",list);


module.exports = router;
