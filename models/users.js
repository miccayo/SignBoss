module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
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
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return Users
}
