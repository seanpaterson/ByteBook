const getBytes = require('./getBytes/getBytes');
const getByte = require('./getByte/getByte');
const createByte = require('./createbyte/createbyte');
const login = require('./login/login');
const auth = require('./auth/auth');
const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
require('dotenv').config()

app.get('/getBytes/:username', function (req, res) {
  let token = req.headers.authorization;
  auth.auth(token, function(toReturn) {
    if(toReturn == -1)
      return res.status(401).send('Auth Failed!');
    else {
        let username = req.url.substring(req.url.lastIndexOf("/")+ 1);
        const toReturn = getBytes.getBytes(username);
        return res.json(toReturn);
    }
  });
});

app.get('/getByte/:byteid', function (req, res) {
  let byteID;
  let token = req.headers.authorization;
  auth.auth(token, function(toReturn) {
    if(toReturn == -1)
      return res.status(401).send('Auth Failed!');
    else {
      byteID = req.url.substring(req.url.lastIndexOf("/")+ 1);
      getByte.getByte(byteID, function(toReturn) {
        if(toReturn == -1)
        return res.status(401).send('Byte retrieval failed');
      else {
        return res.json({byte: {
          title: toReturn.byte_title,
          description: toReturn.byte_description,
          directions: toReturn.byte_directions,
          servings: toReturn.byte_servings,
          timeAmount: toReturn.byte_time_amount,
          timeUnit: toReturn.byte_time_unit,
          ingredients: toReturn.ingredients
        }});
      }
      });
    }
  });
});

app.post('/createbyte', function (req, res) {
  let token = req.headers.authorization;
  auth.auth(token, function(toReturn) {
    if(toReturn == -1)
      return res.status(401).send('Auth Failed!');
    else {
      createByte.createByte(req.body, token, function(toReturn){
        if(toReturn == -1)
          return res.status(401).send('Adding new byte failed');
        else
          return res.json({byteID: toReturn});
      });
    }
  });
});

app.post('/login', function (req, res) {
  let username = req.body.username;
  let password = req.body.password;
  login.login(username, password, function(toReturn) {
    if(toReturn == -1) 
      return res.status(401).send('Login Failed');
    else{
      return res.json({token:toReturn});
    }
  });
});

app.post('/auth', function (req, res) {
  let token = req.headers.authorization;
  auth.auth(token, function(toReturn) {
    if(toReturn == -1)
      return res.status(401).send('Auth Failed!');
      else {
        return res.json({authenticated:toReturn});
      }
  });
});

console.log(process.env.RDS_HOST);
 
app.listen(process.env.PORT || 8080);

const sql = mysql.createConnection({
  port:process.env['RDS_PORT'],
  host: process.env['RDS_HOST'],
  user: process.env['RDS_USER'],
  password: process.env['RDS_PASSWORD'],
  database: process.env['RDS_DATABASE']
});

sql.connect(function(err) {
  if (err)
  {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

exports.sql = sql;