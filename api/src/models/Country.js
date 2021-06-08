const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define("country", { 
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, 
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true ,
    },
  });

};
