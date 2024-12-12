const express = require("express");
const crudController = require("./controllers/crudController.js");

const routes = express.Router();

routes.get("/AllAlunos", crudController.GetAll);
routes.get("/GetId/:id", crudController.GetId);
routes.post("/insertAluno", crudController.Post);
routes.put("/UpdateAluno/:id", crudController.Update);
routes.delete("/DeleteAluno/:id", crudController.Delete);

module.exports = routes;    

