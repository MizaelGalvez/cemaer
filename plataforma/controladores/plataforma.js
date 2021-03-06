var _ = require('underscore');


var Controladorplataforma = function (server) {
	
	var users = [];

	var NoEstaLogeado = function (req, res, next){
			if(!req.session.passport.user){
				res.redirect('/');
				return;
			}

			next();
	};
//
//*********************************************************************
//
	server.get('/cursos', NoEstaLogeado, function (req, res) {
			imgcurso = "img/curso.png",
			cursotitulo= "Curso de Energia Solar ONLINE"
		res.render('cursos', (cursotitulo, imgcurso));
	});
//
//*********************************************************************
//
	server.get('/modulos', NoEstaLogeado, function (req, res) {
			modulotitulo= "Modulo 1",
			modulodescrip = "Aprenderemos la diferencia entre energía solar fotovoltaica y energía solar térmica, así como los fundamentos para usar la energía solar fotovoltaica de la manera más eficiente posible."
		res.render('modulos', (modulotitulo, modulodescrip));
	});
//
//*********************************************************************
//
	server.get('/contenido',NoEstaLogeado, function (req, res) {
			modulotitulo= "Modulo 1",
			modulotexto= "este es el contenido del curso, se simula que ay mucho texto o almenos algo de explicasion he de igual manera se regresara el valor de un video para poder renderizarlo saludos",
			modulovideo= "videos/youtube.MOV",
		res.render('contenido', (modulotitulo, modulotexto));
	});

};
//
//*********************************************************************
//
module.exports = Controladorplataforma;