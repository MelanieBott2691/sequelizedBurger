// router connections that will manage the database arrays and identify the endpoints
var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Router Index
router.get("/", function(req, res) {
  // res.redirect('/burgers'); 
  burger.selectAll(function(data) {
    var hdbrsObj = {
      burgers: data
    };
    console.log(hdbrsObj);
    res.render("index", hdbrsObj);
  });

  router.post("/api/burgers", function(req, res) {
    burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
   ], function(result) {
      // console.log("Please Enter Burger Name!");
      res.json({ id: result.insertId });
   });
  });

  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    burger.updateOne({ devoured: req.body.devoured }, condition, function (
      result
    ) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }else{
        res.status(200).end();
      }
    });
  });
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.deleteOne(condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }else {
      res.status(200).end();
    }
  });
});
});
module.exports = router;
// Create all our routes and set up logic within those routes where required.
// router.get("/burgers", function(req, res) {
//   burger.all(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     // console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/api/burgers", function(req, res) {
//     burger.create([
//     "burger_name", "devoured"
//   ], [
//     req.body.burger_name, false
//    ], function() {
//       console.log("Please Enter Burger Name!");
//       res.redirect('/burgers');
//    });
//   });
  
// router.post("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   // console.log("condition", condition);

//     burger.update({
//       devoured: req.body.devoured
//     }, condition, function(data) {
//       console.log(result);
//       res.redirect('/burgers');
//     });
//   });


// // Export routes for server.js to use.
// module.exports = router;
