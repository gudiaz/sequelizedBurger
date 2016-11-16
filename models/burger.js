'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    
    burger_name: { 
      allowNull: false,
      type: DataTypes.STRING
    },
    devoured: { 
      defaultValue: false,
      type: DataTypes.BOOLEAN
    }
  });
  return Burger;
};