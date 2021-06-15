const{Model:Model,DataTypes:DataTypes}=require("sequelize"),
sequelize=require("../config/connection");

class Comment extends Model{}Comment.init({
    id:{type:DataTypes.INTEGER,
        primaryKey:!0,
        autoIncrement:!0},
        comment_text:{type:DataTypes.STRING,
            validate:{len:[3]}},
            user_id:{type:DataTypes.INTEGER,allowNull:!1,
                references:{model:"user",key:"id"}},
                post_id:{type:DataTypes.INTEGER,
                    allowNull:!1,references:{model:"post",key:"id"}}},
                    {sequelize:sequelize,freezeTableName:!0,
                        underscored:!0,
                        modelName:"comment"}),
                        
                        module.exports=Comment;