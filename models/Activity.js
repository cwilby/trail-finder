module.exports = (sequelize, DataTypes) => {
  class Activity extends sequelize.Sequelize.Model {}
  Activity.init(
    {
      data: { type: DataTypes.JSON, allowNull: true }
    },
    { sequelize, modelName: 'activity' }
  );
  Activity.associate = ({ Journey }) => {
    Activity.belongsTo(Journey);
  };
  return Activity;
};
