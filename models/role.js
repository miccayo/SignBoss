module.exports = (sequelize, DataTypes) => {
  sequelize.define('role', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      unique: true,
      comment: 'Unique user identifier.'
    }
  })
}
