create database portalFutSP;
use portalFutSP;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45) not null,
email varchar(45) not null,
senha varchar(45) not null
)auto_increment = 1;


create table canais(
id int primary key,
nomeCanal varchar(20)
);

insert into canais(id,nomeCanal)values
(1,'corinthians'),
(2,'palmeiras'),
(3,'sao paulo'),
(4,'santos');

create table usuario_canais(
fkUsuario int,
fkCanais int,
inscrito boolean default false,
primary key (fkUsuario,fkCanais),
constraint usuarioFK foreign key (fkUsuario) references usuario(idUsuario),
constraint canaisFK foreign key (fkCanais) references canais(id)
);

CREATE TABLE resultado_quiz (
    idResultado int primary key auto_increment,
    fkUsuario int,
    pergunta varchar(100),
    resposta_usuario varchar(100) not null,
    acertou boolean not null,
    data_resposta datetime default current_timestamp,
    foreign key (fkUsuario) references usuario(idUsuario)
);


