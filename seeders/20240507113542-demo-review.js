'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reviews', [
      {
        review: "ewetvbwgetgvv",
        ProductId: 2,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        review: "vwgetgvewtbhthe",
        ProductId: 6,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        review: "hbtwebhwtehwedb",
        ProductId: 2,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        review: "hwrtedbthwredbh",
        ProductId: 4,
        UserId: 3,
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
