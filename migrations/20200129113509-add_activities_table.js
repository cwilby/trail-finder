'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    const createdAt = { allowNull: false, type: DataTypes.DATE };
    const updatedAt = { allowNull: false, type: DataTypes.DATE };
    return queryInterface.createTable('activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      journeyId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          key: 'id',
          model: 'journeys'
        }
      },
      data: {
        type: DataTypes.JSON,
        allowNull: true
      },
      createdAt,
      updatedAt
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('activities');
  }
};
