module.exports = (sequelize, DataTypes) => {
  class Journey extends sequelize.Sequelize.Model {}
  Journey.init(
    {
      name: { type: DataTypes.STRING, allowNull: false }
    },
    { sequelize, modelName: 'journey' }
  );
  Journey.associate = ({ User, Activity }) => {
    Journey.belongsTo(User);
    Journey.hasMany(Activity);
  };
  return Journey;
};
