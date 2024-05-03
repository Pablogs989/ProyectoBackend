'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        name_category: 'Audiovisual',
        description: 'Movies, videogames, songs...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_category: 'Vehicles',
        description: 'Cars, bikes, trucks...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_category: 'Technology',
        description: 'Phones, pc, consoles, smartwatches...',
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
