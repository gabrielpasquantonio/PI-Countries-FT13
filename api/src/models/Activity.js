const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
 
  sequelize.define("activity", { 
    activity_id: {
      type: DataTypes.UUID, 
      allowNull: false,
      primaryKey: true, 
      unique: true, 
    },
    activity_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

};