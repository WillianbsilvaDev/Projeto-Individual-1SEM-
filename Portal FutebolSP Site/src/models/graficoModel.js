const database = require("../database");

function contarInscricoes() {
  const query = `
    SELECT c.nomeCanal, COUNT(*) AS total
    FROM usuario_canais uc
    JOIN canais c ON c.id = uc.fkCanais
    WHERE uc.inscrito = true
    GROUP BY c.nomeCanal;
  `;
  return database.executar(query);
}

module.exports = {
  contarInscricoes,
};
