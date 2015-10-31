var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var multer = require("multer");
var router = require("./routes/router")
var cookieParser = require('cookie-parser');
var fs = require("fs");

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(multer({dest: '/tmp/'}).array('image'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', "ejs");

app.use(router);

app.listen(3000);
module.exports = app;
