module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {    //user is table name on database
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
       email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    
    });
    return User;
  };
