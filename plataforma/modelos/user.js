var models = require('./modelos'),
	Schema = models.Schema;

var userSchema = Schema({
	username : 'string',
	twitter  : Schema.Types.Mixed
});

var User = models.model('user', userSchema);

module.exports = User;