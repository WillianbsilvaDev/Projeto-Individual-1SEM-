var quizModel = require("../models/quizModel");

function responder(req, res) {
    var fkUsuario = req.body.fkUsuario;
    var pergunta = req.body.pergunta;
    var respostaUsuario = req.body.respostaUsuario;
    var acertou = req.body.acertou;

    if (!fkUsuario || !pergunta || !respostaUsuario || acertou === undefined) {
        res.status(400).send("Campos obrigatórios não foram preenchidos!");
        return;
    }

    quizModel.registrarResposta(fkUsuario, pergunta, respostaUsuario, acertou)
        .then(resultado => {
            res.status(200).json({
                mensagem: "Resposta registrada com sucesso!",
                resultado: resultado
            });
        })
        .catch(erro => {
            console.error("Erro ao registrar resposta:", erro);
            res.status(500).json({ erro: erro.sqlMessage });
        });
}



module.exports = {
    responder
};
