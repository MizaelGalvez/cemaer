var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/' + 'cemaer');

module.exports = mongoose;