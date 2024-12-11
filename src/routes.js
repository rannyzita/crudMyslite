const express = require("express");
const crudController = require("./controllers/crudController.js");

const routes = express.Router();

routes.post("/insertAluno", crudController.Post);

module.exports = routes;    

