var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");


router.get("/responder", function (req, res) {
  quizController.responder(req, res);
});

module.exports = router;