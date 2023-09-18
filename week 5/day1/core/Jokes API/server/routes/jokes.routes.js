const { model } = require("mongoose");
const jokesController = require("../controllers/jokes.controllers")




module.exports = (app) => {
    app.post("/api/jokes/", jokesController.createjokes)
    app.get("/api/jokes/",jokesController.findAlljokes)
    app.get("/api/jokes/:id", jokesController.findOnejokes)
    app.put("/api/jokes/:id", jokesController.updateOnejokes)
    app.delete("/api/jokes/:id",jokesController.deletejokes)

}
