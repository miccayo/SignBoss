/*
  Users table model:
    | userId | username | email | password
*/

const { DataTypes } = require('@sequelize/core')

module.exports = (sequelize) => {
  const User = sequelize.define('users', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
      comment: 'Unique user identifier.'
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: 'Unique username.'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return User
}
