const router=require("express").Router(),
{Comment:Comment}=require("../../models"),
withAuth=require("../../utils/auth");

router.get("/",
(t,e)=>{Comment.findAll({}).then(t=>e.json(t)).catch(t=>
    {console.log(t),
        e.status(500).json(t)})}),
        
        router.get("/:id",(t,e)=>{Comment.findAll
            ({where:{id:t.params.id}}).then(t=>e.json(t)).catch(t=>
                {console.log(t),e.status(500).json(t)})}),
                
                router.post("/",withAuth,(t,e)=>{t.session&&Comment.create({comment_text:t.body.comment_text,post_id:t.body.post_id,user_id:t.session.user_id}).then(t=>e.json(t)).catch(t=>
                    {console.log(t),e.status(400).json(t)})}),
                    
                    router.put("/:id",withAuth,(t,e)=>{Comment.update({comment_text:t.body.comment_text},
                        {where:{id:t.params.id}})
                        .then(t=>{t?e.json(t):e.status(404)
                            .json({message:"No comment found with this id"})})
                            .catch(t=>{console.log(t),e.status(500).json(t)})}),
                            
                            router.delete("/:id",withAuth,(t,e)=>{Comment.destroy({where:{id:t.params.id}})
                            .then(t=>{t?e.json(t):e.status(404)
                                .json({message:"No comment found with this id"})})
                                .catch(t=>{console.log(t),e.status(500).json(t)})}),
                                
                                module.exports=router;