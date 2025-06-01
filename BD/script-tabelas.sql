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

create table anotacoes(
id int auto_increment primary key,
assunto varchar(30),
texto varchar(200),
fkUsuario int,
fkCanais int,
constraint chat_fkusuario foreign key (fkUsuario) references usuario_canais(fkUsuario),
constraint chat_fkcanais foreign key (fkCanais) references usuario_canais(fkCanais)
) auto_increment = 1;

create table noticias(
id int primary key auto_increment,
titulo varchar(45),
texto varchar(100),
fkUsuario int,
fkCanais int,
constraint Noticia_fkUsuario foreign key (fkUsuario) references usuario_canais(fkUsuario),
constraint Noticia_fkCanais foreign key (fkCanais) references usuario_canais(fkCanais)
);