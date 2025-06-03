var database = require("../database/config")

function contarInscricoes() {
  const query = `
      select c.nomeCanal, COUNT(*) AS total
    from usuario_canais as u_c
    join canais as c on c.id = u_c.fkCanais
    join usuario as u on u.idUsuario = u_c.fkUsuario
    where u_c.inscrito = true
    group by c.nomeCanal;
  `;
  return database.executar(query);
}

module.exports = {
  contarInscricoes
};
