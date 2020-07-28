const express = require('express');
const mysql = require('mysql');

const app = express();
var cookieParser = require('cookie-parser');

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

// load the cookie-parsing middleware
app.use(cookieParser());


app.use(allowCrossDomain);
  //some other code


const port = 8000;
const table ='users';

const pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'testdb',
  // host: process.env.MYSQL_HOST,
  // user: process.env.MYSQL_USER,
  // password: process.env.MYSQL_PWD,
  // database: process.env.MYSQL_DB,
});

pool.connect(err =>{
  if(err){
    console.log("err", err);
    return err
  }
})

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

app.get('/api/users', (req, res) => {
  pool.query(`select * from ${table}`, (err, rows) => {
console.log('retour sql', err, rows );

    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

app.get('/', (req, res) => {
  pool.query(`select distinct nom, prenom, email  from ${table}`, (err, rows) => {
console.log('retour sql 2', err, rows );

    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});
