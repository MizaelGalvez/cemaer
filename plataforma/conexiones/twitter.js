var passport = require('passport'),
	TwitterStrategy = require('passport-twitter').Strategy;


var User = require('../modelos/user');

var twitterConexion= function (server) {

	passport.use(
		new TwitterStrategy(
		{
			consumerKey: 'bDoFjXdmGoRnVJPfji3Iw',
			consumerSecret: 'Of73NyiSiZ7dhQCyimZV4lR0ufp93c3o3xWfG1RuXQ',
			callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
		},
		function (token, tokenSecret, profile, done) {
			var user = new User({
				username : profile.username,
				twitter : profile
			});

			user.save(function(err){
				if(err){
					done(err, null);
					return;
				}

				done(null, profile);
			});
		}
	));

	server.get('/auth/twitter',passport.authenticate('twitter'));

	server.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' }),
	function(req, res) {
		res.redirect('/cursos');
	});
};

module.exports = twitterConexion;