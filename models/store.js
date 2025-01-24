const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');
const Product = require('./product')


class Store extends Model { }

Store.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  },
  {
    sequelize,  // Pass the connection instance
    modelName: 'Store',
    tableName: 'Stores',
    timestamps: true,
  }
);

Store.hasMany(Product, {
  foreignKey: 'storeId',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE'
});


Product.hasOne(Store, {
  foreignKey: 'id',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE'
});

module.exports = Store;
