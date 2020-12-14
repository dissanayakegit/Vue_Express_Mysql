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

#APIS
//get all customers 
GET http://localhost:8080/api/customers/get-all-customers

//add new customer
POST http://localhost:8080/api/customers/add-new-customer (pass new record as json)

//update customer
POST http://localhost:8080/api/customers/update-customer (pass record as json)

//delete customer
POST http://localhost:8080/api/customers/delete-customer (pass record id as json)

#front-end part in front_end folder
```
cd front_end
npm i
npm run serve
```