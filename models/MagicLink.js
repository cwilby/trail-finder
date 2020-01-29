module.exports = (sequelize, DataTypes) => {
  class MagicLink extends sequelize.Sequelize.Model {}
  MagicLink.init(
    {
      email: { type: DataTypes.STRING, allowNull: false },
      token: { type: DataTypes.STRING, allowNull: false },
    },
    { sequelize, modelName: 'magicLink' }
  );
  MagicLink.associate = ({ User }) => {
    MagicLink.belongsTo(User);
  };
  return MagicLink;
};
