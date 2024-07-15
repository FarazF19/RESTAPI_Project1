const express = require ("express");
const users = require("./MOCK_DATA.json");



const app = express();

const PORT = 4000;

//Routes
app.get('/api/users',(req,res)=>{
    return res.json(users);
})

app.route('/api/users/:id')
.get((req,res)=>{
    const id = Number(req.params.id);
    const user =  users.find((user)=>user.id == id);
    return res.json(user);
}).patch((req,res)=>{
    //Edit user with ID 
    res.json({status:"pending"});
}).delete((req,res)=>{
   //Delete user with ID 
    res.json({status:"pending"});
})

app.post('./api/users', (req,res)=>{
    //TODO: Create new user
    return res.send({status:"pending"})
})

app.listen(PORT, ()=>console.log("Server Started!"))