const express = require('express');//commonjs
const path = require('path');//commonjs
require('dotenv').config();

console.log(">>> check env:", process.env)
// import express from 'express';//es modules
const app = express(); // app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME || 'localhost';

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//Khai báo route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('check ABC')
})

app.get('/hoidanit', (req, res) => {
    // res.send('<h1>Hoi Dan IT with Eric</h1>')
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})