// api-routes set up

var db = require("../models/");

module.exports = function(app) {
    app.get("/api/burgers", function(req, res) {
        db.burger.findAll({}).then(function(req, res) {
            res.json(results);
        })
    });
    app.post("/api/burgers", function(req, res) {
        db.burger.create({
            text: req.body.text,
            complete: req.body.complete,
        }).then(function(results){
            res.json(results);
        });
    });
    app.delete("/api/burgers/:id", function(req, res){
        var id = req.params.id;
        db.burger.destory({
            where: {
                id: id,
            },
        }).then(function(results){
            res.json(results);
        });
    });
    app.put("/api/burgers/", function(req, res){
        db.burger.update(
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