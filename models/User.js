const{Model:Model,DataTypes:DataTypes}=require("sequelize"),
sequelize=require("../config/connection"),
bcrypt=require("bcrypt");

class User extends Model{checkPassword(e)
    {return bcrypt.compareSync(e,this.password)}}
    
    User.init({id:{type:DataTypes.INTEGER,
        allowNull:!1,
        primaryKey:!0,
        autoIncrement:!0},
        username:{type:DataTypes.STRING,
            allowNull:!1,unique:!0},
            password:{type:DataTypes.STRING,allowNull:!1,
                validate:{len:[4]}}},
                
                {hooks:{beforeCreate:async e=>(e.password=await 
                    bcrypt.hash(e.password,10),e),
                    beforeUpdate:async e=>(e.password=await 
                        bcrypt.hash(e.password,10),e)},
                        sequelize:sequelize,
                        timestamps:!1,
                        freezeTableName:!0,
                        underscored:!0,
                        modelName:"user"}),
                        
                        module.exports=User;