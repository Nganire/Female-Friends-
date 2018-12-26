const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CommentSchema = new Schema({
	comment: {
		type: String,
		required: true
	},
    user: {
        type: Schema.Types.Object,
        required: true,
        ref: 'User'
    },
    post: {
        type: Schema.Types.Object,
        required: true,
        ref: 'Post'
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

module.exports = mongoose.model('Comment', CommentSchema);
