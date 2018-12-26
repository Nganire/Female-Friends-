const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

var UserSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
    lastName: {
        type: String,
        required: true
    },
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
    city: {
        type: String,
        required: false
    },
    industry: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    bdate: {
        type: Date,
        required: false
    },
    company: {
        type: String,
        required: false
    },
    expertise: {
        type: String,
        required: false
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    role: {
        type: String,
        required: false
    },
    jobSearch: {
        type: Boolean,
        required: true,
        default: false
    },
	activity: {
		type: Number,
		required: true,
		default: 0
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

UserSchema.methods.hashPassword = function(password) {
	return bcrypt.hashSync(password, 12);
};
UserSchema.methods.comparePassword = function(password, hashedPassword) {
	return bcrypt.compareSync(password, hashedPassword);
};

module.exports = mongoose.model('User', UserSchema);
