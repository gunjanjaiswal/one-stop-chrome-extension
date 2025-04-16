const express=require("express");
const router=express.Router();
const Link=require("../models/Link");

//Create a new Link
router.post("/",async(req,res)=>{
    console.log("req body: ",req.body);
    try{
        const newLink= await Link.create(req.body);
        res.status(201).json(newLink);
    }
    catch(error){
        res.status(500).json(error);
    }
})

//Get All projects
router.get("/",async(req,res)=>{
    try{
        const newLink= await Link.find().sort({createdAt:-1});
        res.json(newLink);
    }
    catch(error){
        res.status(500).json(error);
    }
})

//get single project
router.get("/:id",async(req,res)=>{
    try{
        const newLink= await Link.findById(req.params.id);
        res.json(newLink);
    }
    catch(error){
        res.status(500).json(error);
    }
})


//update single project
router.put("/:id",async(req,res)=>{
    try{
        const updated= await Link.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        res.status(201).json(updated);
    }
    catch(error){
        res.status(500).json(error);
    }
})

//Delete a Link
router.delete("/:id",async(req,res)=>{
    try{
        await Link.findByIdAndDelete(req.params.id);
        res.json(`Deleted project with id ${req.params.id} successfully`);
    }
    catch(error){
        res.status(500).json(error);
    }
})

module.exports=router;