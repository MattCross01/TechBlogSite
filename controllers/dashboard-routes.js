const router=require("express").Router(),
sequelize=require("../config/connection"),

{Post:Post,User:User,Comment:Comment}=require("../models"),
withAuth=require("../utils/auth");

router.get("/",withAuth,(e,t)=>{Post.findAll({where:{user_id:e.session.user_id},
    attributes:["id","title","content","created_at"],
    include:[{model:Comment,
        attributes:["id","comment_text","post_id","user_id","created_at"],
        include:{model:User,attributes:["username"]}},
        
        {model:User,attributes:["username"]}]})
        .then(e=>{const s=e.map(e=>e.get({plain:!0}));
        t.render("dashboard",{posts:s,loggedIn:!0})})
        .catch(e=>{console.log(e),t.status(500).json(e)})}),
        
        router.get("/edit/:id",withAuth,(e,t)=>{Post.findOne({where:{id:e.params.id},attributes:["id","title","content","created_at"],
        include:[{model:User,attributes:["username"]},{model:Comment,
            attributes:["id","comment_text","post_id","user_id","created_at"],
            include:{model:User,attributes:["username"]}}]})
            
            .then(e=>{if(!e)return void t.status(404).json({message:"No post found with this id"});
            
            const s=e.get({plain:!0});t.render("edit-post",{post:s,loggedIn:!0})})
            .catch(e=>{console.log(e),t.status(500).json(e)})}),
            
            router.get("/new",(e,t)=>{t.render("new-post")}),
            
            module.exports=router;