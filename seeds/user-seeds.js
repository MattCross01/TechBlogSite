const{User:User}=require("../models"),

userData=[{username:"David",
password:"David123"},

{username:"James",
password:"james321"},

{username:"Frank",
password:"Frank923"}],

seedUsers=()=>User.bulkCreate(userData);

module.exports=seedUsers;