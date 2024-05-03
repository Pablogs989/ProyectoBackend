'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Star Wars',
        price: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MacBook Pro',
        price: 1700,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'BMW 230i',
        price: 34000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'iPad Air',
        price: 600,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mercedes C63',
        price: 45000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tesla Model S',
        price: 110000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
