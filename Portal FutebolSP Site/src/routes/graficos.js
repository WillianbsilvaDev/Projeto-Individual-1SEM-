var express = require("express");
var router = express.Router();

var graficosController = require("../controllers/graficosController");


router.get("/inscricoes", function (req, res) {
  graficosController.contadorInscrito(req, res);
});

module.exports = router;