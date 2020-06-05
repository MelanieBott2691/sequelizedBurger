// router connections that will manage the database arrays and identify the endpoints
var express = require("express");
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Router Index Get Burger
router.get("/", function(req, res) {
  // res.redirect('/burgers'); 
  burger.Burger.findAll({ include: [{ model: db.customer }], order: [ [ 'Name' ]]}).then(function(data) {
    var hdbrsObj = {
      burgers: data
    };
    console.log(hdbrsObj);
    res.render("index", hdbrsObj);
  });
});
// Create Burger
router.post("/burgers/create", function(req, res) {
  burger.Burger.create({Name: req.body.burger_name}).then(function(burger_db){
    res.redirect('/burgers');
  });
});
// Update Burger
router.put('/burgers/update/:burger_name', function(req, res){
  burger.Customer.findOrCreate({where: {Name: req.body.customer_name}}).spread((customer) => {
    customer.get({ plain: true});
    db.burger.update({devoured: 1, CustomerId: customer.id}, {where: {id: req.params.burger_name}}).then(function(burger_db) {
      res.redirect('/burgers');
    })
  })
});
module.exports = router;
