
connection.query("SELECT * FROM Appwork", function (error, result, fields) {
    if (error) throw error;
    console.log('fields in Appwork are: ', result);
  
  });

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
  
  
  connection.end();