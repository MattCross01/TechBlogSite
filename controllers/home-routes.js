const sequelize=require("../config/connection"),

{Post:Post,User:User,Comment:Comment}=require("../models"),

router=require("express").Router();
router.get("/",(e,t)=>{Post.findAll
    ({attributes:["id","title","content","created_at"],
    include:[{model:Comment,attributes:["id","comment_text","post_id","user_id","created_at"],
    include:{model:User,attributes:["username"]}},
    
    {model:User,attributes:["username"]}]})
    .then(s=>{const o=s.map(e=>e.get({plain:!0}));t.render("homepage",{posts:o,loggedIn:e.session.loggedIn})})
    .catch(e=>{console.log(e),t.status(500).json(e)})}),
    
    router.get("/login",(e,t)=>{e.session.loggedIn?t.redirect("/"):t.render("login")}),
    router.get("/signup",(e,t)=>{t.render("signup")}),
    router.get("/post/:id",(e,t)=>{Post.findOne({where:{id:e.params.id},attributes:["id","content","title","created_at"],
    include:[{model:Comment,attributes:["id","comment_text","post_id","user_id","created_at"],
    include:{model:User,attributes:["username"]}},{model:User,attributes:["username"]}]})
    .then(s=>{if(!s)return void t.status(404).json({message:"No post found with this id"});
    
    const o=s.get({plain:!0});console.log(o),t.render("single-post",{post:o,loggedIn:e.session.loggedIn})})
    .catch(e=>{console.log(e),t.status(500).json(e)})}),
    
    router.get("/posts-comments",(e,t)=>{Post.findOne({where:{id:e.params.id},attributes:["id","content","title","created_at"],
    include:[{model:Comment,attributes:["id","comment_text","post_id","user_id","created_at"],
    include:{model:User,attributes:["username"]}},{model:User,attributes:["username"]}]})
    .then(s=>{if(!s)return void t.status(404).json({message:"No post found with this id"});
    
    const o=s.get({plain:!0});t.render("posts-comments",{post:o,loggedIn:e.session.loggedIn})})
    .catch(e=>{console.log(e),t.status(500).json(e)})}),
    
    module.exports=router;