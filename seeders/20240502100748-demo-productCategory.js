'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ProductCategories', [
      {
        ProductId: 1,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 2,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 3,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 4,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 5,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 6,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 6,
        CategoryId: 3,
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
