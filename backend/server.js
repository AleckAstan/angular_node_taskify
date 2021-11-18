/*
    Cathal Butler | G00346889 - Node Express Server.

    INSTALLED PACKAGES:
    npm install express --save
    npm install body-parser --save
    npm install mongoose            : https://mongoosejs.com/docs/index.html
    npm install -g nodemon          : https://nodemon.io/

    Help Webpages:
    https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
    https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
*/
// Variables
const express = require('express');
const bodyParser = require('body-parser'); // Need for post methods
//Mongoose & mLab Variables
const mongoose = require('mongoose');
const config = require('./config/database');

// Declare a variable for API route
const api = require('./routes/api');
const app = express();

// Create a connection to MongoDB
mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { useNewUrlParser: true})
    .then(() => console.log('Connection successful!'))
    .catch((err) => console.error(err));

// Create application/x-www-form-urlencoded parser
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Add API route to the endpoint URL after other `use` function.
app.use('/api', api); //Use API

/**
 * Server listen, running on localhost:8081
 */
const server = app.listen(8081, function () {
    let host = server.address().address
    let port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});

// Export app as a module.
module.exports = app;
