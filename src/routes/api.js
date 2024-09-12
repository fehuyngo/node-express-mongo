const express = require('express')
const routerAPI = express.Router()
const { getUsersAPI, postCreateUserAPI,
    putUpdateUserAPI, deleteUserAPI,
    postUploadSingleFileApi, postUploadMultipleFilesApi } = require('../controllers/apiController');
const { postCreateCustomer, postCreateArrayCustomer,
    getAllCustomers, putUpdateCustomers,
    deleteACustomer
} = require('../controllers/customerController');

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileApi);
routerAPI.post('/files', postUploadMultipleFilesApi);

routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-many', postCreateArrayCustomer);
routerAPI.get('/customers', getAllCustomers);
routerAPI.put('/customers', putUpdateCustomers);
routerAPI.delete('/customers', deleteACustomer);

module.exports = routerAPI;