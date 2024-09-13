const express = require('express')
const routerAPI = express.Router()
const { getUsersAPI, postCreateUserAPI,
    putUpdateUserAPI, deleteUserAPI,
    postUploadSingleFileApi, postUploadMultipleFilesApi } = require('../controllers/apiController');
const { postCreateCustomer, postCreateArrayCustomer,
    getAllCustomers, putUpdateCustomers,
    deleteACustomer, deleteArrayCustomer
} = require('../controllers/customerController');
const { postCreateProject
} = require('../controllers/projectController');

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
routerAPI.delete('/customers-many', deleteArrayCustomer);

routerAPI.get('/info', (req, res) => {
    return res.status(200).json({
        data: req.query
    })
});

routerAPI.get('/info/:name/:address', (req, res) => {
    return res.status(200).json({
        data: req.params
    })
});


routerAPI.post('/projects', postCreateProject);

module.exports = routerAPI;