'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      productQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false, 
      },
      productAmount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      storeId: {
        type: Sequelize.UUID,
        allowNull: false,
        // references: {
        //   model: 'stores',
        //   key: 'id',
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};










































// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.addColumn('Users', 'stackId', {
//       type: Sequelize.INTEGER,
//       allowNull: true, // Adjust as needed
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.removeColumn('Users', 'stackId');
//   },
// };