const express = require('express')
const app = express();
const port = 3000
const path = require('path');
const addService = require('./services/add');
const deleteService = require('./services/delete');

var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");
var cors = require("cors");

app.use('/', express.static('./build', {
  index: "index.html"
}))

let async = require("async");
let mysql = require('mysql');
let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'garageDb'
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// app.use(expressValidator());
app.use(cookieParser());
app.use(cors());

const indexPath = path.join(__dirname, "./build/index.html");

app.get('/home', (req, res) => {
    console.log('in home');
    res.sendFile(indexPath);
});

app.get('/dataTable', (req, res) => {
    console.log('in datatable');
    res.sendFile(indexPath);
});

app.get('/forms', (req, res) => {
    console.log('in forms');
    res.sendFile(indexPath);
});

app.post('/addOpportunity', (req, res) => addService.addOpportunity(req, res));

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/*', (req, res) => {
    res.redirect('/home');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))