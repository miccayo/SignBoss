/*
  Users table model:
    | userId | username | email | password
*/
import { Sequelize, DataTypes } from '@sequelize/core'

function loadModel(sequelize: Sequelize) {
  const User = sequelize.define('users', {
    user_id: {
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
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return User
}

export { loadModel }