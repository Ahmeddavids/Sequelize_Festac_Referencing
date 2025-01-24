const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class Product extends Model {}

Product.init(
  {
    // Model attributes are defined here
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      productQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false, 
      },
      productAmount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      storeId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Stores',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Product', // We need to choose the model name,
    tableName: 'Products',
    timestamps: true
  },
);



module.exports = Product;