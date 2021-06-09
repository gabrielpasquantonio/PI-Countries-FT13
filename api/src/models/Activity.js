const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
 
  sequelize.define("activity", { 
    id: {
      type: DataTypes.UUID, 
      allowNull: false,
      primaryKey: true, 
      unique: true, 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false 
      
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