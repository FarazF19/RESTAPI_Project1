const User = require('../models/user.models');

async function handleGetAllUsers(req,res){
   const allDbUsers = await User.find({});
    //adding custom headers: Note: Always add X-before Custom headers
    res.setHeader("X-myName","Faraz");
    return res.json(allDbUsers);
}

async function handleGetUserById(req,res){
    const user = await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({error:"User does not exist!"}) // added status code 404
    }
    return res.json(user);
}

async function handleUpdateUserById(req,res){
  //Edit user with ID 
    await User.findByIdAndUpdate(req.params.id, {lastName : "farooqi"})
    res.json({status:"Success"});
}

async function handleDeleteUserById(req,res){
   //Delete user with ID 
    await User.findByIdAndDelete(req.params.id)
    res.json({status:"Success"});
}

async function handleCreateUser(req,res){
    const body = req.body;  //The request/content sent from the frontend side comes in req.body
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title ){
        return res.status(400).json({msg: "All fields are required..."}) // Added status codes - 400
    }
    const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
    });
    console.log("result",result);
    return res.status(201).json({msg: "success",id: result._id});
    }

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser
}