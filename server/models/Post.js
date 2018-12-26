const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PostSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
    user: {
        type: Schema.Types.Object,
        required: true,
        ref: 'User'
    },
	createdAt: {
		type: Date,
		required: true,
		default: new Date().toISOString()
	},
    updatedAt: {
		type: Date,
		required: true,
		default: new Date().toISOString()
	}
});

module.exports = mongoose.model('Post', PostSchema);
