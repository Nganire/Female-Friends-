// payment and redirect for registration
// get user friends

const express = require('express');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator/check');
const router = express.Router();

//add models
const User = require('../models/User');

// validate input fields
const validateRegistration = [
    check('firstName')
        .not()
        .isEmpty()
        .withMessage('Please fill in your first name')
        .matches(/^([A-z]|\s)+$/)
		.withMessage('Name should not contain any numbers'),
    check('lastName')
        .not()
        .isEmpty()
        .withMessage('Please fill in your last name')
        .matches(/^([A-z]|\s)+$/)
    	.withMessage('Name should not contain any numbers'),
    check('email')
        .not()
        .isEmpty()
        .withMessage('Please fill in your email')
        .isEmail()
        .withMessage('Please enter correct email')
        .custom(value => {
        	return User.findOne({ email: value }).then(function(user) {
        		if (user) {
        			throw new Error('This email is already in use');
        		}
    		});
    	}),
    check('password')
        .not()
        .isEmpty()
        .withMessage('Please fill in your password')
        .isLength({ min: 8 })
        .withMessage('Password should contain at least 8 characters')
        .isAlphanumeric()
        .withMessage('Password should contain only letters and numbers'),
    check('password_conf')
        .not()
        .isEmpty()
        .withMessage('Please fill in your password confirmation')
        .custom(function(value, { req }) {
    		if (value !== req.body.password) {
    			throw new Error("Password don't match");
    		}
    		return value;
    	})
];

const validateLogin = [
    check('email')
        .not()
        .isEmpty()
        .withMessage('Please fill in your email'),
    check('password')
        .not()
        .isEmpty()
        .withMessage('Please fill in your password')
];

// check authorization
const authCheck = (req, res, next) => {
	if (req.session.user) {
		return next();
	}
	return res.status(401).send({ isLoggedIn: false });
};

//--------------------------------------------------------------

//register

router.post('/registration', validateRegistration, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.mapped() });
    }
    //after redirect to payment and then next
    const user = new User(req.body);
    user.password = user.hashPassword(user.password);
    user.save()
        .then(user => {
            req.session.user = user;
            return res.send({ message: 'You are registred' });
        })
        .catch(err => {
            return res.status(400).json( err );
    });
});

// login
router.post('/login', validateLogin, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.mapped() });
    }
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
				return res.status(400).send({ errors: { auth: { msg: 'User does not exist!' } } });
			}
			if (!user.comparePassword(req.body.password, user.password)) {
				return res.status(400).send({ errors: { auth: { msg: 'Wrong password!' } } });
			}
			req.session.user = user;
            res.send(req.session.user);
        })
});

//check authorization
router.get('/auth', (req, res) => {
    if (req.session.user) return res.send( req.session.user );
    return res.status(401).send({ isLoggedIn: false });
});

//logout
router.get('/logout', (req, res) => {
   req.session.destroy();
   res.send('Logged out');
});


// get all users
router.get('/getall', (req, res) => {
    User.find()
    .sort({ activity: 'desc' })
    .then(users => {
        res.json(users);
    })
    .catch(err => res.json(err));
});


//get user by id
router.get('/friend/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        res.json(user);
    })
    .catch(error => {
        res.json(error);
    });
});

//edit user data
router.put('/edit-info/:id', authCheck, (req, res) => {
    if (req.session.user._id === req.params.id) {
        User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(user => {
            return res.json(user);
        })
        .catch(error => {
            res.json(error);
        });
    } else {
        return res.status(400).send({ isLoggedUser: false });
    }
});

//filter all users
router.get('/getallfrom', (req, res) => {
    User.find( req.body )
    .sort({ activity: 'desc' })
    .then(users => {
        res.json(users);
    })
    .catch(err => res.json(err));
});

// get top users
router.get('/top', (req, res) => {
    User.find()
    .sort({ activity: 'desc' })
    .limit(5)
    .then(users => {
        res.json(users);
    })
    .catch(err => res.json(err));
});

module.exports = router;
