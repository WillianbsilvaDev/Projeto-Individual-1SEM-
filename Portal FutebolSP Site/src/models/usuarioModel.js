var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function inscreverNoCanal(ID_USUARIO, canalId) {
    console.log(`Iniciando inscrição do usuário ${ID_USUARIO} no canal ${canalId}`);

    const selectSql = `
        SELECT * FROM usuario_canais
        WHERE fkUsuario = ${ID_USUARIO} AND fkCanais = ${canalId};
    `;

    return database.executar(selectSql)
        .then(resultado => {
            if (resultado.length > 0) {
                const updateSql = `
                    UPDATE usuario_canais
                    SET inscrito = true
                    WHERE fkUsuario = ${ID_USUARIO} AND fkCanais = ${canalId};
                `;
                return database.executar(updateSql);
            } else {
                const insertSql = `
                    INSERT INTO usuario_canais(fkUsuario, fkCanais, inscrito)
                    VALUES (${ID_USUARIO}, ${canalId}, true);
                `;
                console.log("Executando a instrução SQL: \n" + insertSql);
                return database.executar(insertSql);
            }
        });
}

function inscreverPalmeiras(ID_USUARIO) {
    return inscreverNoCanal(ID_USUARIO, 2);
}

function inscreverCorinthians(ID_USUARIO) {
    return inscreverNoCanal(ID_USUARIO, 1);
}

function inscreverSp(ID_USUARIO) {
    return inscreverNoCanal(ID_USUARIO, 3);
}

function inscreverSantos(ID_USUARIO) {
    return inscreverNoCanal(ID_USUARIO, 4);
}

function verificandoInscricao(ID_USUARIO) {
    console.log("Verificando os users que possuem inscrição()");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
            select 
        usuario_canais.inscrito as inscrito,
        c.nomeCanal as nomeCanal,
        u.nome as nomeUsuario
        from usuario_canais
        inner join usuario as u on u.idUsuario = usuario_canais.fkUsuario
        inner join canais as c on c.id = usuario_canais.fkCanais
        where inscrito = true and fkUsuario = ${ID_USUARIO};

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function removendoInscricao(ID_USUARIO, ID_CANAL) {
    console.log(`Removendo inscrição do usuário ${ID_USUARIO} no canal ${ID_CANAL}`);

    const instrucaoSql = `
        UPDATE usuario_canais
        SET inscrito = false
        WHERE fkUsuario = ${ID_USUARIO} AND fkCanais = ${ID_CANAL};
    `;

    const selectSql = `
        SELECT 
            usuario_canais.inscrito AS inscrito,
            c.nomeCanal AS nomeCanal,
            u.nome AS nomeUsuario
        FROM usuario_canais
        INNER JOIN usuario AS u ON u.idUsuario = usuario_canais.fkUsuario
        INNER JOIN canais AS c ON c.id = usuario_canais.fkCanais
        WHERE usuario_canais.inscrito = true AND fkUsuario = ${ID_USUARIO};
    `;

    return database.executar(instrucaoSql)
        .then(() => database.executar(selectSql));
}

module.exports = {
    cadastrar,
    autenticar,
    inscreverPalmeiras,
    inscreverCorinthians,
    inscreverSp,
    inscreverSantos,
    verificandoInscricao,
    removendoInscricao
};