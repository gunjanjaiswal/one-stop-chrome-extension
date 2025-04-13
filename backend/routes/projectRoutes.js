const express=require("express");
const router=express.Router();
const Project=require("../models/Project");

//Create a new Project
router.post("/",async(req,res)=>{
    console.log("req body: ",req.body);
    try{
        const newProject= await Project.create(req.body);
        res.status(201).json(newProject);
    }
    catch(error){
        res.status(500).json(error);
    }
})

//Get All projects
router.get("/",async(req,res)=>{
    try{
        const newProject= await Project.find().sort({createdAt:-1});
        res.json(newProject);
    }
    catch(error){
        res.status(500).json(error);
    }
})

//get single project
router.get("/:id",async(req,res)=>{
    try{
        const newProject= await Project.findById(req.params.id);
        res.json(newProject);
    }
    catch(error){
        res.status(500).json(error);
    }
})


//update single project
router.put("/:id",async(req,res)=>{
    try{
        const updated= await Project.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        res.status(201).json(updated);
    }
    catch(error){
        res.status(500).json(error);
    }
})

//Delete a Project
router.delete("/:id",async(req,res)=>{
    try{
        await Project.findByIdAndDelete(req.params.id);
        res.json(`Deleted project with id ${req.params.id} successfully`);
    }
    catch(error){
        res.status(500).json(error);
    }
})

module.exports=router;