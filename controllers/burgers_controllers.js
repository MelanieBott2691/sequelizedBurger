// var models = require('../models');
// var express = require('express');
// var router = express.Router();

// var sequelizeConnection = models.sequelize;
// sequelizeConnection.sync();

// // Create Routes
// router.get('/', function (req, res) {
//   res.redirect('index');
// });

// router.get('/index', function (req, res) {
//   models.burgers
//     .findAll({
//       include: [{ model: models.devoured }]
//     })
//     .then(function (data) {
//       var hbsObject = { burgers: data };
//       res.redirect('/index', hbsObject);
//     });
// });
// // Create New Burger
// router.post('/burger/create', function (req, res) {
//   models.burgers
//     .create({
//       burger_name: req.body.burger_name,
//       devoured: false
//     })
//     .then(function () {
//       res.redirect('/index');
//     });
// });

// // Devour Burger
// router.post('/burger/eat/:id', function (req, res) {
//   if (req.body.burgerEater === '' || req.body.burgerEater == null) {
//     req.body.burgerEater = 'Anonymous';
//   }
//   models.devoured
//     .create({
//       devoured_name: req.body.burgerEater,
//       burgerId: req.params.id
//     })
//     .then(function (newDevourer) {
//       models.burgers
//         .findOne({ where: { id: req.params.id } })
//         .then(function (eatenBurger) {
//           eatenBurger
//             .update({
//               devoured: true
//             })
//             .then(function () {
//               res.redirect('/index');
//             });
//         });
//     });
// });
// module.exports = router;
