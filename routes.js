const express  =  require('express');
const Route =  express.Router();
const userController =   require('../Controller/userController');


Route.get('/'.userController.Home)
Route.get('/about/ :username', userController.about)
Route.get('/', userController.notFound)

module.exports =  route;
