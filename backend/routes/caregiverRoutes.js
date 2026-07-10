const express = require("express");
const Caregiver =
require("../models/Caregiver");

const router = express.Router();

router.post("/", async (req,res)=>{

 try{

  const caregiver =
  await Caregiver.create(
   req.body
  );

  res.status(201).json(
   caregiver
  );

 }

 catch(error){

  res.status(500).json({
   message:error.message
  });

 }

});

router.get("/", async (req,res)=>{

 try{

  const caregivers =
  await Caregiver.find();

  res.json(caregivers);

 }

 catch(error){

  res.status(500).json({
   message:error.message
  });

 }

});

module.exports = router;