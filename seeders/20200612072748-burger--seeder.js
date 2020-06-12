'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'burgers',
      [
        {
          burger_name: 'Hawaiian BBQ Burger',
          devoured: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          burger_name: 'Little Bacon Cheeseburger',
          devoured: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          burger_name: 'Scrum-Delicious Burger',
          devoured: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          burger_name: 'Chile Veggie Burger',
          devoured: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          burger_name: 'Mushroom Melt Double Beef',
          devoured: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          burger_name: 'Big Red Burger',
          devoured: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
*/
    return queryInterface.bulkDelete('burger', null, { truncate: true });
  }
};
