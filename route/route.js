const express = require('express');
const route = express.Router();
const Controller = require('../controller/controller');

route.get('/',Controller.getIndex);
route.post('/',Controller.putData);
route.get('/get-data',Controller.getAllData);
route.get('/get-data/:id',Controller.getDataById);
route.get("/update/:id",Controller.getUpdate);
route.post("/update/:id",Controller.updateData);
route.post('/delete',Controller.deleteData)   ;

module.exports = route;