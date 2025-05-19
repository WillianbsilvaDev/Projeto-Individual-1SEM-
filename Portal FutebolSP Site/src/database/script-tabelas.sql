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
nomeCanal int
);

create table usuario_canais(
fkUsuario int,
fkCanais int,
inscrito boolean default false,
primary key (fkUsuario,fkCanais),
constraint usuarioFK foreign key (fkUsuario) references usuario(idUsuario),
constraint canaisFK foreign key (fkCanais) references canais(id)
);

create table anotacoes(
id int auto_increment primary key,
assunto varchar(30),
texto varchar(200),
fkUsuario int,
fkCanais int,
constraint chat_fkusuario foreign key (fkUsuario) references usuario_canais(fkUsuario),
constraint chat_fkcanais foreign key (fkCanais) references usuario_canais(fkCanais)
) auto_increment = 1;