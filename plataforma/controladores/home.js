var _ = require('underscore');

var Controladorhome = function (server) {

	var users = [];

	var estalogeado = function (req, res, next){
		if(req.session.passport.user){
			res.redirect('/cursos');
			return;
		}

		next();
	};
	var NoEstaLogeado = function (req, res, next){
			if(!req.session.passport.user){
				res.redirect('/');
				return;
			}

			next();
	};
//

	server.get('/', estalogeado, function (req, res) {	
			user ="",
		res.render('index', (user));
	});

	server.get('/cursos', NoEstaLogeado, function (req, res) {
			user = req.session.passport.user,
			imgcurso = "img/curso.png",
			cursotitulo= "Curso de Energia Solar ONLINE"
		res.render('cursos', (cursotitulo, imgcurso, user));
	});

	server.post('/ingresar', function (req, res) {
		req.session.user = req.body.username;
		
		users.push(req.session.user);

		res.redirect('/auth/twitter');
	});

	server.get('/log-out', function (req, res) {
		users = _.without(users, req.session.user);

		req.session.destroy();
		res.redirect('/');
	});



};
module.exports = Controladorhome;