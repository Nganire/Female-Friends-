// add user id check for edit and delete post

const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const { check, validationResult } = require('express-validator/check');
const router = express.Router();

//add models
const Post = require('../models/Post');
const User = require('../models/User');

// check authorization
const authCheck = (req, res, next) => {
	if (req.session.user) {
		return next();
	}
	return res.status(401).send({ isLoggedIn: false });
};

// count users posts +
const activityPlus = (req, res, next) => {
    User.findOneAndUpdate({_id : req.session.user._id}, {$inc : {'activity' : 1}})
    .then(() => {
        return next()
    })
    .catch(err => {
        return res.status(400).json({
            err
        });
    })
};

// count users posts --
const activityMin = (req, res, next) => {
    User.findOneAndUpdate({_id : req.session.user._id}, {$inc : {'activity' : -1}})
    .then(() => {
        return next()
    })
    .catch(err => {
        return res.status(400).json({
            err
        });
    })
};

// validate post
const validatePost = [
    check('title')
        .not()
        .isEmpty()
        .withMessage('Please fill in some title'),
    check('body')
        .not()
        .isEmpty()
        .withMessage('Please write something first')
];

 //post
 router.post('/addpost', authCheck, validatePost, activityPlus, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.mapped() });
    }
    const post = new Post(req.body);
    post.user = req.session.user._id;
    post.save()
    .then(post => {
        return res.json({
            ok: true,
            message: 'Your post is successful'
        });
    })
    .catch(err => {
        return res.status(400).json({
            err
            //errors: { auth: { msg: 'Oooops... Something went wrong!' }}
        });
    });
});

// get all posts
router.get('/getallposts', (req, res) => {
    Post.find()
    .populate('user', { password: 0 })
    .sort({ createdAt: 'desc' })
    .then(posts => {
        res.json(posts);
    })
    .catch(err => res.json(err));
});

// get one Post by id
router.get('/readmore/:id', (req, res) => {
    Post.findById({ _id: req.params.id })
    .populate('user', { password: 0 })
    .then(post => {
        res.json(post);
    })
    .catch(error => {
        res.json(error);
    });
});

// Edit post
router.put('/edit-post/:id', authCheck, (req, res) => {
    // add user id check
    Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(post => {
        return res.json(post);
    })
    .catch(error => {
        res.json(error);
    });

});

// delete post
router.delete('/delete/:id', authCheck, activityMin,(req, res) => {
    // add user id check
    Post.findByIdAndRemove({ _id: req.params.id })
    .then(post => {
        return res.json('Your post is deleted');
    })
    .catch(error => {
        res.json(error);
    });
});

// filter posts
router.get('/getallfrom', (req, res) => {
    Post.find( )
    .sort({ createdAt: 'desc' })
    .populate(
        {path: 'user',
        match: req.body,
        options: { password: 0 }})
    .then(posts => {
        let newposts = posts.filter(post => {if (post.user) return post });
        res.json(newposts);
    })
    .catch(err => res.json(err));
});

// get all with one id
router.get('/getallbyid/:id', (req, res) => {
    Post.find( )
    .sort({ createdAt: 'desc' })
    .populate(
        {path: 'user',
        match: { _id: req.params.id },
        options: { password: 0 }})
    .then(posts => {
        let newposts = posts.filter(post => {if (post.user) return post });
        res.json(newposts);
    })
    .catch(err => res.json(err));
});

// get last 10 posts
router.get('/getlastposts', (req, res) => {
    Post.find()
	.limit(8)
    .populate('user', { password: 0 })
    .sort({ createdAt: 'desc' })
    .then(posts => {
        res.json(posts);
    })
    .catch(err => res.json(err));
});
module.exports = router;
