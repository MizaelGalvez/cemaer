var models = require('./modelos'),
	Schema = models.Schema;

var cursosSchema = Schema({
	Titulo : 'string',
	imagen : 'string',
});

var Cursos = models.model('cursos', cursosSchema);

module.exports = Cursos;