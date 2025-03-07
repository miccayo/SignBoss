/*
  Users table model:
    | userId | username | email | password
*/
import { Sequelize, DataTypes } from '@sequelize/core'

function loadModel(sequelize: Sequelize) {
  const User = sequelize.define('user', {
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
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'First name.'
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Last name.'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: true,
      comment: 'Unique email address.'
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Hashed password.'
    }
  })

  return User
}

export { loadModel }