'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Book',
        price: '20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Book',
        price: '20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Book',
        price: '20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Book',
        price: '20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Book',
        price: '20',
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
