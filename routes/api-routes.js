var db = require("../models/");

module.exports = function(app) {
    app.get("/api/todos", function(req, res) {
        db.todos.findAll({}).then(function(req, res) {
            res.json(results);
        })
    });
    app.post("/api/todos", function(req, res) {
        db.todos.create({
            text: req.body.text,
            complete: req.body.complete,
        }).then(function(results){
            res.json(results);
        });
    });
    app.delete("/api/todos/:id", function(req, res){
        var id = req.params.id;
        db.todos.destory({
            where: {
                id: id,
            },
        }).then(function(results){
            res.json(results);
        });
    });
    app.put("/api/todos/", function(req, res){
        db.todos.update(
            {
                text: req.body.text,
                complete: req.body.complete,
            },
            {
                where: { id: req.body.id },
            }
        ).then(function(results){
            res.end();
        });
    });
}