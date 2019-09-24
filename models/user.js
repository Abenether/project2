module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
  
      
  
      poster_name: DataTypes.STRING,
  
      email:DataTypes.STRING,
  
      password:DataTypes.STRING,
  
      phone: DataTypes.STRING
  
    });
  
  
  
    User.associate = (models) => {
  
      User.hasMany(models.Post, {
  
        onDelete: 'cascade'
  
      });
  
    };
  
  
  
    return User;
  
  };