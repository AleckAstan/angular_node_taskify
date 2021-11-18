const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const config = require("./config/database");

const api = require("./routes/api");
const app = express();

mongoose.Promise = require("bluebird");
mongoose
    .connect(config.database, { useNewUrlParser: true })
    .then(() => console.log("Connection successful!"))
    .catch((err) => console.error(err));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", api);

const server = app.listen(8081, function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log("App listening at http://%s:%s", host, port);
});

module.exports = app;