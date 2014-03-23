var models = require('./modelos'),
	Schema = models.Schema;

var contenidoSchema = Schema({
	Titulo : 'string',
	Descripcion : 'string',
	video : 'string',
});

var Contenido = models.model('cursos', contenidoSchema);

module.exports = Contenido;