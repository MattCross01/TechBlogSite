const router=require("express")
.Router(),{Post:Post,
    User:User,
    Comment:Comment}=require("../../models"),
    
    sequelize=require("../../config/connection"),
    withAuth=require("../../utils/auth");
    
    router.get("/",(t,e)=>
    {console.log("======================"),
    
    Post.findAll({attributes:["id","title","content","created_at"],
    order:[["created_at","DESC"]],
    include:[{model:User,attributes:["username"]},
    
    {model:Comment,attributes:["id","comment_text","post_id","user_id","created_at"],
    include:{model:User,attributes:["username"]}}]})
    
    .then(t=>e.json(t.reverse())).catch(t=>
        {console.log(t),e.status(500).json(t)})}),
        
        router.get("/:id",(t,e)=>{Post.findOne({where:{id:t.params.id},attributes:["id","content","title","created_at"],include:[{model:User,attributes:["username"]},
        {model:Comment,attributes:["id","comment_text","post_id","user_id","created_at"],
        
        include:{model:User,attributes:["username"]}}]})
        
        .then(t=>{t?e.json(t):e.status(404).json({message:"No post found with this id"})})
        .catch(t=>{console.log(t),e.status(500).json(t)})}),
        
        router.post("/",withAuth,(t,e)=>{Post.create({title:t.body.title,content:t.body.content,user_id:t.session.user_id})
        
        .then(t=>e.json(t))
        .catch(t=>{console.log(t),e.status(500).json(t)})}),
        
        router.put("/:id",withAuth,(t,e)=>{Post.update({title:t.body.title,content:t.body.content},{where:{id:t.params.id}})
        
        .then(t=>{t?e.json(t):e.status(404).json({message:"No post found with this id"})})
        .catch(t=>{console.log(t),e.status(500).json(t)})}),
        
        router.delete("/:id",withAuth,(t,e)=>{Post.destroy({where:{id:t.params.id}})
        
        .then(t=>{t?e.json(t):e.status(404).json({message:"No post found with this id"})})
        .catch(t=>{console.log(t),e.status(500).json(t)})}),
        
        module.exports=router;