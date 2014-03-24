var express = require('express'),
	swig = require('swig'),
	_ = require("underscore"),
	passport = require("passport");

var RedisStore = require('connect-redis')(express);

var server = express();
var users = [];

//-------------------------------------------------------
// Configuracion para renderear vistas
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/plataforma/views');
// Configuracion para renderear vistas
//-------------------------------------------------------
//soporte para post, cookie y session
server.configure(function(){

	server.use(express.static( __dirname + '/plataforma/public'));

	server.use( express.logger() );
	server.use( express.cookieParser() );
	server.use(express.json());
	server.use(express.urlencoded());
	
	server.use( express.session({
		secret : "noentiendobienestoaun",
		store  : new RedisStore({})
		// store  : new RedisStore({
		//	host : conf.redis.host,
		//	port : conf.redis.port,
		//	user : conf.redis.user,
		//	pass : conf.redis.pass
		// });	
	}) );
	
	server.use(passport.initialize());
	server.use(passport.session());

});

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	done(null, obj);
});


//soporte para post, cookie y session
//-------------------------------------------------------
//controladores

var Controladorhome = require('./plataforma/controladores/home');
var Controladorplataforma = require('./plataforma/controladores/plataforma');
var Controladoradministrador = require('./plataforma/controladores/administrador');



Controladorhome(server);
Controladorplataforma(server);
Controladoradministrador(server);

//controladores
//-------------------------------------------------------
//conexiones
var Conexiontwitter = require('./plataforma/conexiones/twitter');
var Conexionfacebook = require('./plataforma/conexiones/facebook');


Conexiontwitter(server);
Conexionfacebook(server);
//conexiones
//-------------------------------------------------------

server.listen(3000);