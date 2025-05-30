var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})
//autentificando se o login existe
router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});
// usuario se inscrevendo no canal palmeiras
router.post("/inscreverPalmeiras", function (req, res) {
    usuarioController.inscreverPalmeiras(req, res);
});

// usuario se inscrevendo no canal palmeiras
router.post("/inscreverCorinthians", function (req, res) {
    usuarioController.inscreverCorinthians(req, res);
});

// usuario se inscrevendo no canal palmeiras
router.post("/inscreverSp", function (req, res) {
    usuarioController.inscreverSp(req, res);
});

// usuario se inscrevendo no canal palmeiras
router.post("/inscreverSantos", function (req, res) {
    usuarioController.inscreverSantos(req, res);
});

router.get("/verificandoInscricao/:idUsuario", function (req, res) {
    usuarioController.verificandoInscricao(req, res);
});

module.exports = router;