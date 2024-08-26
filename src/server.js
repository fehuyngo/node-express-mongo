require('dotenv').config();
const express = require('express');//commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
//get the client
const mysql = require('mysql2');

// import express from 'express';//es modules
const app = express(); // app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME || 'localhost';

//config template engine
configViewEngine(app);

//Khai báo route
app.use('/', webRoutes);

//test connection
//create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, // default: 3306
    user: 'root',
    password: '123456', // default: empty
    database: 'fehuyngo'
});

connection.query(
    'SELECT * FROM Users',
    (err, results, fields) => {
        console.log(">>> results= ", results);
        console.log(">>> fields= ", fields);
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})