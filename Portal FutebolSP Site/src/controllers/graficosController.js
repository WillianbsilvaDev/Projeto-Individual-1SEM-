const graficoModel = require("../models/graficoModel");

function contadorInscrito(req, res) {
  graficoModel.contarInscricoes()
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((erro) => {
      console.error(erro);
      res.status(500).json({ erro: "Erro ao obter contagem de inscrições" });
    });
}

module.exports = {
  contadorInscrito,
};
