module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {}
  User.init(
    {
      email: { type: DataTypes.STRING, allowNull: false }
    },
    { sequelize, modelName: 'user' }
  );
  User.associate = ({ Journey }) => {
    User.hasMany(Journey);
  };
  return User;
};
