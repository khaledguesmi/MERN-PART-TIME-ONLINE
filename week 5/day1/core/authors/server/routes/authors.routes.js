const { model } = require("mongoose");
const authorsController = require("../controllers/authors.controllers")




module.exports = (app) => {
    app.post("/api/authors/", authorsController.createAuthors)
    app.get("/api/authors/",authorsController.findAllAuthors)
    app.get("/api/authors/:id", authorsController.findOneAuthors)
    app.put("/api/authors/:id", authorsController.updateOneAuthors)
    app.delete("/api/authors/:id",authorsController.deleteAuthors)

}
