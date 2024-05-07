'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('ProductOrders', [
      {
        ProductId: 5,
        OrderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 6,
        OrderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 2,
        OrderId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 2,
        OrderId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
