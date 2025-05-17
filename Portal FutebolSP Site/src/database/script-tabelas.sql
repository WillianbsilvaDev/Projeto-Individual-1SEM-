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

create table cadrastro_Canais(
fkcadastroUser int,
fkCanais int,
primary key (fkcadastroUser,fkCanais),
constraint cadastroUserFK foreign key (fkcadastroUser) references cadastroUser(id),
constraint canaisFK foreign key (fkCanais) references canais(id)
);