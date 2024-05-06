'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Orders', [
      {
        userId: 1,
        orderDate: new Date(),
        totalOrder: 100,
        shippingAddress: 's/123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        orderDate: new Date(),
        totalOrder: 120,
        shippingAddress: 's/456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        orderDate: new Date(),
        totalOrder: 10000,
        shippingAddress: 's/789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
