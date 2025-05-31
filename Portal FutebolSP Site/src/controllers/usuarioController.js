var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            id: resultadoAutenticar[0].idUsuario,
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            senha: resultadoAutenticar[0].senha
                        })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log(req.body)
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    console.log(senha);


    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
        // }  else if (idTransportadora == undefined) {
        //     res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                    res.json({ idUsuario: resultado.insertId })
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function inscreverCorinthians(req, res) {
    var idUsuario = req.body.ID_USUARIO
    console.log('valordoid', idUsuario)
    usuarioModel.inscreverCorinthians(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function inscreverPalmeiras(req, res) {
    var idUsuario = req.body.ID_USUARIO
    console.log('valordoid', idUsuario)
    usuarioModel.inscreverPalmeiras(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function inscreverSantos(req, res) {
    var idUsuario = req.body.ID_USUARIO
    console.log('valordoid', idUsuario)
    usuarioModel.inscreverSantos(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function inscreverSp(req, res) {
    var idUsuario = req.body.ID_USUARIO
    console.log('valordoid', idUsuario)
    usuarioModel.inscreverSp(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function verificandoInscricao(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log('valordoid', idUsuario)
    usuarioModel.verificandoInscricao(idUsuario)
        .then(
            function (resultado) {

                 let canais = {
                palmeiras: false,
                corinthians: false,
                saopaulo: false,
                santos: false
            };
            resultado.forEach(item => {
                const nome = item.nomeCanal; // use o campo correto da tabela
                if (nome.includes('palmeiras')) canais.palmeiras = true;
                else if (nome.includes('corinthians')) canais.corinthians = true;
                else if (nome.includes('santos')) canais.santos = true;
                else if (nome.includes('são paulo')) canais.saopaulo = true})

                    res.json(canais)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao ver inscrições! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function removendoInscricao(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log('valordoid', idUsuario)
    usuarioModel.removendoInscricao(idUsuario)
        .then(
            function (resultado) {

                 let canais = {
                palmeiras: false,
                corinthians: false,
                saopaulo: false,
                santos: false
            };
            resultado.forEach(item => {
                const nome = item.nomeCanal; // use o campo correto da tabela
                if (nome.includes('palmeiras')) canais.palmeiras = true;
                else if (nome.includes('corinthians')) canais.corinthians = true;
                else if (nome.includes('santos')) canais.santos = true;
                else if (nome.includes('são paulo')) canais.saopaulo = true})

                    res.json(canais)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao ver inscrições! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
module.exports = {
    autenticar,
    cadastrar,
    inscreverPalmeiras,
    inscreverCorinthians,
    inscreverSantos,
    inscreverSp,
    verificandoInscricao,
    removendoInscricao
}