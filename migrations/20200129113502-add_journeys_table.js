'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    const createdAt = { allowNull: false, type: DataTypes.DATE };
    const updatedAt = { allowNull: false, type: DataTypes.DATE };
    return queryInterface.createTable(
      'journeys',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        userId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          references: {
            key: 'id',
            model: 'users'
          }
        },
        name: {
          type: DataTypes.STRING,
          allowNull: true
        },
        note: {
          type: DataTypes.STRING,
          allowNull: true
        },
        createdAt,
        updatedAt
      }
    );
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('journeys');
  }
};
