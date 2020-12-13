const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');

const con = require('./APIs/DBConnection');

const customers = require('./APIs/customersAPI');

const app = express();

app.use(cors({origin: '*'}));
app.use(bodyParser.json());
app.use('/api/customers', customers);


const port = 8080;
app.listen(port, () => {
    console.log(`Server started and listning on port ${port}`);
})