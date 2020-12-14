const express = require('express');
const Route = express.Router();
const con = require('./DBConnection');

//get all customers
Route.get('/get-all-customers', (req, res) => {
    let query = `SELECT * from customers`;
    con.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(`Error: ${err} occured.`);
        }
    })
})

//add new customer
Route.post('/add-new-customer', (req, res) => {
    console.log(req.body);
    let query = `INSERT INTO customers (name, address)
    VALUES ('${req.body.name}', '${req.body.address}')`;

    con.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(`Error: ${err} occured.`);
        }
    })
})

//update customer
Route.post('/update-customer', (req, res) => {
    console.log(req.body);
    let query = `UPDATE customers
    SET name = '${req.body.name}', address= '${req.body.address}'
    WHERE id = '${req.body.id}'`;
    con.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(`Error: ${err} occured.`);
        }
    })
})

//delete customer
Route.post('/delete-customer', (req, res) => {
    console.log(req.body);
    let query = `DELETE FROM customers WHERE id='${req.body.id}'`;
    
    con.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(`Error: ${err} occured.`);
        }
    })
})

module.exports = Route;