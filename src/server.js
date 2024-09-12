require('dotenv').config();
const express = require('express');//commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const fileUpload = require('express-fileupload');
const connection = require('./config/database');
const { MongoClient } = require('mongodb');

// import express from 'express';//es modules
const app = express(); // app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

// config file upload
app.use(fileUpload());

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config template engine
configViewEngine(app);

//Khai báo route
app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);

(async () => {
    //test connection
    try {
        //using mongoose
        // await connection();

        //using mongodb driver
        // Connection URL
        const url = process.env.DB_HOST_WITH_DRIVER;
        const client = new MongoClient(url);

        // Database Name
        const dbName = process.env.DB_NAME;

        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('documents');

        app.listen(port, hostname, () => {
            console.log(`Backend zero app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>> Error connect to DB: ", error);
    }
})();