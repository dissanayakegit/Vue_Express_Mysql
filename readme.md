#create package.json
```
npm init -y (y is optional)
```

#install neccesory packages
```
npm install --save express express-handlebars mysql body-parser 
npm install --save-dev nodemon
```

#in packege.json replace
```
"scripts": {
    "test": "node Index.js",
    "dev": "nodemon Index.js"
  },
```

#create DB connection
```
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'techknow',
    multipleStatements: true
});

connection.connect((err) => {
    if(!err){
        console.log('connection to mysql Succeed!');
    }else{
        console.log('connection to mysql failed!');
    }

});
```

#create APIs
```
Route.get('/', (req, res) => {
con.query('SELECT * from users', (err, rows, fields) => {
    if(!err){
        res.send(rows);
    }else{
        console.log(`Error: ${err} occured.`);
    }
})
})
```

#front-end part in front_end folder