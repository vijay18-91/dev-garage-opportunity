const express = require('express')
const app = express();
const port = 8080
const path = require('path');
const multer = require("multer");

const addService = require('./services/add');
const deleteService = require('./services/delete');
const uploadFile = require('./services/upload');
const details = require('./services/details');
const opportunities = require('./services/opportunities');


let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
let expressValidator = require("express-validator");
let cors = require("cors");
let upload = multer();

let async = require("async");
let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'vijayanand',
    database: 'garageDb'
});

// connection.connect();

app.use('/', express.static('./build', {
  index: "index.html"
}))


app.use(bodyParser.json({limit: '50mb'})); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 1000000 })); // support encoded bodies
// app.use(expressValidator());
app.use(cookieParser());
app.use(cors());

const indexPath = path.join(__dirname, "./build/index.html");

app.get('/home', (req, res) => {
    res.sendFile(indexPath);
});

app.get('/dataTable', (req, res) => {
    res.sendFile(indexPath);
});

app.get('/forms', (req, res) => {
    res.sendFile(indexPath);
});

app.post('/addOpportunity', (request,response) => addService.addOpportunity(request, response, connection));

app.post('/uploadExcel', upload.single('fileName'), (request, response) => uploadFile.upload(request, response, connection));

app.get('/getAccountDetails', (request, response) => details.accountDetails(request, response, connection));

app.get('/getOpportunities', (request, response) => opportunities.getOpportunities(request, response, connection));

app.get('/', (req, res) => {
    console.log('in empty slash');
    res.redirect('/home');
});

app.get('/*', (req, res) => {
    console.log('in others');
    res.redirect('/home');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))