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


    select c.nomeCanal, COUNT(*) AS total
    from usuario_canais as u_c
    join canais as c on c.id = u_c.fkCanais
    join usuario as u on u.idUsuario = u_c.fkUsuario
    where u_c.inscrito = true
    and u.idUsuario = 21
    group by c.nomeCanal;

select 
        usuario_canais.inscrito as inscrito,
        c.nomeCanal as nomeCanal,
        u.nome as nomeUsuario
        from usuario_canais
        inner join usuario as u on u.idUsuario = usuario_canais.fkUsuario
        inner join canais as c on c.id = usuario_canais.fkCanais
        where inscrito = true and fkUsuario = 20;
        
        
select * from usuario_canais where fkUsuario = 7;

    SELECT c.nomeCanal, COUNT(*) AS total
    FROM usuario_canais uc
    JOIN canais c ON c.id = uc.fkCanais
    WHERE uc.inscrito = true
    GROUP BY c.nomeCanal;
  ;
  