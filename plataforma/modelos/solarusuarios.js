var models = require('./modelos'),
	Schema = models.Schema;

var usuariosSchema = Schema({
	username : 'string',
});

var SolarUsuarios = models.model('solarusuarios', userSchema);

module.exports = SolarUsuarios;