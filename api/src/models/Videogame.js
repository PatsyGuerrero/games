const { DataTypes, DATEONLY } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_date: {
      type:DataTypes.STRING,
    validate: { 
   isDate: true
  }
},
    description: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    rating: {
      type:DataTypes.STRING,
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull:false,
    }
  });

};
