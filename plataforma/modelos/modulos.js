var models = require('./modelos'),
	Schema = models.Schema;

var modulosSchema = Schema({
	Titulo : 'string',
	Descripcion : 'string',
});

var Modulos = models.model('cursos', modulosSchema);

module.exports = Modulos;