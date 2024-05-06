'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Pablo',
        email: 'pablo@gmail.com',
        password: '123456789',
        shippingAddress: 's/123',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pepe',
        email: 'pepe@gmail.com',
        password: '987654321',
        shippingAddress: 's/456',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jon',
        email: 'jon@gmail.com',
        password: '564738291',
        shippingAddress: 's/789',
        role: 'user',
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
