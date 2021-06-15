const router=require("express")
.Router(),{User:User,Post:Post,Comment:Comment}=require("../../models");

router.get("/",(s,e)=>{User.findAll({attributes:{exclude:["[password"]}})
.then(s=>e.json(s))
.catch(s=>{console.log(s),e.status(500).json(s)})}),

router.get("/:id",(s,e)=>
{User.findOne({attributes:{exclude:["password"]},
where:{id:s.params.id},
include:[{model:Post,attributes:["id","title","content","created_at"]},
{model:Comment,attributes:["id","comment_text","created_at"],

include:{model:Post,attributes:["title"]}},
{model:Post,attributes:["title"]}]})

.then(s=>{s?e.json(s):e.status(404).json({message:"No user found with this id"})})
.catch(s=>{console.log(s),e.status(500).json(s)})}),

router.post("/",(s,e)=>{User.create({username:s.body.username,password:s.body.password})
.then(t=>{s.session.save(()=>{s.session.user_id=t.id,s.session.username=t.username,s.session.loggedIn=!0,e.json(t)})})
.catch(s=>{console.log(s),e.status(500).json(s)})}),

router.post("/login",(s,e)=>{User.findOne({where:{username:s.body.username}})
.then(t=>{if(!t)
    return void e.status(400).json({message:"No user with that username!"});
    
    t.checkPassword(s.body.password)?s.session.save(()=>{s.session.user_id=t.id,s.session.username=t.username,s.session.loggedIn=!0,e.json({user:t,message:"You are now logged in!"})}):e.status(400).json({message:"Incorrect password!"})})
    .catch(s=>{console.log(s),e.status(500).json(s)})}),
    
    router.post("/logout",(s,e)=>{s.session.loggedIn?s.session.destroy(()=>{e.status(204).end()}):e.status(404).end()})
   ,router.put("/:id",(s,e)=>{User.update(s.body,{individualHooks:!0,where:{id:s.params.id}})
   
   .then(s=>{s[0]?e.json(s):e.status(404).json({message:"No user found with this id"})})
   .catch(s=>{console.log(s),e.status(500).json(s)})}),
   
   router.delete("/:id",(s,e)=>{User.destroy({where:{id:s.params.id}})
   .then(s=>{s?e.json(s):e.status(404).json({message:"No user found with this id"})})
   .catch(s=>{console.log(s),e.status(500).json(s)})}),
   
   module.exports=router;