var models = require('./modelos'),
	Schema = models.Schema;

var modulosSchema = Schema({
	Titulo : 'string',
	Descripcion : 'string',
	Contenido : 'string',
	videotitulo1: 'string',
	url1 : 'string',
	videotitulo2: 'string',
	url2 : 'string',
	videotitulo3: 'string',
	url3 : 'string',
	videotitulo4: 'string',
	url4 : 'string',
	videotitulo5: 'string',
	url5 : 'string',
	videotitulo6: 'string',
	url6 : 'string',
	videotitulo7: 'string',
	url7 : 'string',
});

var Modulos = models.model('cursos', modulosSchema);

module.exports = Modulos;