'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    fullName: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    passwordDigest: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    age: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    birthMonth: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    birthDate: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    profilePic: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    city: {
      type:DataTypes.STRING,
    },
    state: {
      type:DataTypes.STRING,
    },
    country: {
      type:DataTypes.STRING,
    },
    bio: {
      type:DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};