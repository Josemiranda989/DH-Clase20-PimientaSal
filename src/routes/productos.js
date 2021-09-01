var express = require("express");
var router = express.Router();
const productoController = require ('../controllers/productoController')

/* GET home page. */
router.get("/", (req, res) => {
  res.send("listado de productos");
});

router.get("/:plato", productoController.detalle);

module.exports = router;
