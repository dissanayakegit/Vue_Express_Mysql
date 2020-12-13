const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'express_mysql_crud',
    multipleStatements: true
});

connection.connect((err) => {
    if(!err){
        console.log('connection to mysql succeed!');
    }else{
        console.log('connection to mysql failed!');
    }

});

module.exports = connection;