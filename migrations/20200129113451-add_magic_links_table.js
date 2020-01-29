'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    const createdAt = { allowNull: false, type: DataTypes.DATE };
    const updatedAt = { allowNull: false, type: DataTypes.DATE };
    return queryInterface.createTable('magicLinks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      token: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt,
      updatedAt
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('magicLinks');
  }
};
