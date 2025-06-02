var database = require("../database/config")

function contarInscricoes() {
  const query = `
    SELECT c.nomeCanal, COUNT(*) AS total
    FROM usuario_canais u_c
    JOIN canais c ON c.id = u_c.fkCanais
    WHERE u_c.inscrito = true
    GROUP BY c.nomeCanal;
  `;
  return database.executar(query);
}

module.exports = {
  contarInscricoes
};
