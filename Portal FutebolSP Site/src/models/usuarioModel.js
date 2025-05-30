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

function inscreverCorinthians(ID_USUARIO) {
    console.log("Iniciando função inscreverCorinthians()");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        insert into usuario_canais(fkUsuario, fkCanais, inscrito)values (${ID_USUARIO}, 1, true);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inscreverPalmeiras(ID_USUARIO) {
    console.log("Iniciando função inscreverPalmeiras()");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        insert into usuario_canais(fkUsuario, fkCanais, inscrito)values (${ID_USUARIO}, 2, true);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function inscreverSp(ID_USUARIO) {
    console.log("Iniciando função inscreverSp()");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        insert into usuario_canais(fkUsuario, fkCanais, inscrito)values (${ID_USUARIO}, 3, true);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inscreverSantos(ID_USUARIO) {
    console.log("Iniciando função inscreverSantos()");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        insert into usuario_canais(fkUsuario, fkCanais, inscrito)values (${ID_USUARIO}, 4, true);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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
module.exports = {
    autenticar,
    cadastrar,
    inscreverPalmeiras,
    inscreverCorinthians,
    inscreverSp,
    inscreverSantos,
    verificandoInscricao
};