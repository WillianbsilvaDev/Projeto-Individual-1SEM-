
var database = require("../database/config");

function registrarResposta(fkUsuario, pergunta, respostaUsuario, acertou) {
    var instrucaoSql = `
        INSERT INTO resultado_quiz (fkUsuario, pergunta, resposta_usuario, acertou)
        VALUES (${fkUsuario}, '${pergunta}', '${respostaUsuario}', ${acertou});
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarResposta
};

