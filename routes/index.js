var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var Appwork;


  var connection = mysql.createConnection({
    host  : 'remotemysql.com',
    user  : 'nUlb9aa8ln',
    password  : 'cEkNiVNyzH',
    database: 'nUlb9aa8ln',
    port  : '3306'
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });
  
  connection.query("SELECT * FROM Appwork", function (error, result, fields) {
    if (error) throw error;
    Appwork = result;
  });

  setInterval(function(){console.log('fields in Appwork are: ', Appwork[0])},3000);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: Appwork[0].name, Invoice_no: Appwork[0].Invoice_no,
                        date: Appwork[0].date, due_date: Appwork[0].due_date,
                        dev_cost: Appwork[0].development_cost, brand_cost: Appwork[0].branding_cost });
});

module.exports = router;