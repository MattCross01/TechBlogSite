const{Model:Model,DataTypes:DataTypes}=require("sequelize"),
sequelize=require("../config/connection");

class Post extends Model{}Post.init({id:{type:DataTypes.INTEGER,
  allowNull:!1,
  primaryKey:!0,
  autoIncrement:!0},
  title:{type:DataTypes.STRING,
    allowNull:!1},
    content:{type:DataTypes.TEXT,
      allowNull:!1},
      user_id:{type:DataTypes.INTEGER,
        references:{model:"user",key:"id"}}},
        {sequelize:sequelize,
          freezeTableName:!0,
          underscored:!0,
          modelName:"post"}),
          
          module.exports=Post;