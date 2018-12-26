const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

//add here controllers
const userController = require('./controllers/userController');
const postController = require('./controllers/postController');
const commentController = require('./controllers/commentController');

const app = express();

app.use(bodyparser.json());

try {
	mongoose.connect('mongodb://female:female123@ds261521.mlab.com:61521/female', { useNewUrlParser: true });
} catch(error) {
	console.log(error);
};

app.use(
	cors({
		origin: ['http://localhost:3000'],
		credentials: true //allow setting of cookies
	})
);

app.use(
	session({
		secret: 'super-duper-secret-stuff!',
		saveUninitialized: false,
		resave: false,
		cookie: { maxAge: 6000 * 60 }
	})
);


//use  controllers
app.use('/api/user', userController);
app.use('/api/post', postController);
app.use('/api/comment', commentController);

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
