const express=require("express");
const router=express.Router();
const QA=require("../models/QA");

//Create a new QA
router.post("/",async(req,res)=>{
    console.log("req body: ",req.body);
    try{
        const newQA= await QA.create(req.body);
        res.status(201).json(newQA);
    }
    catch(error){
        res.status(500).json(error);
    }
})

//Get All QA's
router.get("/",async(req,res)=>{
    try{
        const QA= await QA.find().sort({createdAt:-1});
        res.json(newQA);
    }
    catch(error){
        res.status(500).json(error);
    }
})

//get single QA
router.get("/:id",async(req,res)=>{
    try{
        const QA= await QA.findById(req.params.id);
        res.json(newQA);
    }
    catch(error){
        res.status(500).json(error);
    }
})


//update single QA
router.put("/:id",async(req,res)=>{
    try{
        const updated= await QA.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        res.status(201).json(updated);
    }
    catch(error){
        res.status(500).json(error);
    }
})

//Delete a QA
router.delete("/:id",async(req,res)=>{
    try{
        await QA.findByIdAndDelete(req.params.id);
        res.json(`Deleted project with id ${req.params.id} successfully`);
    }
    catch(error){
        res.status(500).json(error);
    }
})

module.exports=router;