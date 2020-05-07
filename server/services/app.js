const express = require('express');
const path = require('path');
const addService = require('./add');
const deleteService = require('./delete');

var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");
var cors = require("cors");

let async = require("async");
let mysql = require('mysql');
let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'garageDb'
});

const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(expressValidator());
app.use(cookieParser());
app.use(cors());

const indexPath = express.static('./build', {index: "index.html"});

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.sendFile(indexPath);
});

app.get('/dataTable', (req, res) => {
    res.sendFile(indexPath);
});

app.get('/forms', (req, res) => {
    res.sendFile(indexPath);
});

app.post('/addOpportunity', addService.addOpportunity(request, response));


app.get('/*', (req, res) => {
    res.redirect('/home');
});

export default app;
