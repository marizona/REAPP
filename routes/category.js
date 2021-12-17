const express = require("express");
const router = express.Router();


// controller
const {
  create,
  update,
  remove,
  list
} = require("../controllers/category");

// routes
router.post("/category",create);
router.get("/categories", list);
router.put("/category/:slug",update);
router.delete("/category/:slug",remove);


module.exports = router;
