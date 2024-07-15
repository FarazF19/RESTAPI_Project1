const express = require ("express");
const fs = require('fs');
const users = require("./MOCK_DATA.json");



const app = express();

//Middleware - Plugin
app.use(express.urlencoded({extended:false}));

//Middlewares 
app.use((req,res,next)=>{
console.log("Hello from Middleware-1");
next();
})

app.use((req,res,next)=>{
console.log("Hello from Middleware-2");
next();
})

const PORT = 4000;

//Routes
app.get('/api/users',(req,res)=>{
    //adding custom headers: Note: Always add X-before Custom headers
    res.setHeader("X-myName","Faraz")
    return res.json(users);
})

app.route('/api/users/:id')
.get((req,res)=>{
    const id = Number(req.params.id);
    const user =  users.find((user)=>user.id == id);
    if(!user){
        return res.status(404).json({error:"User does not exist!"}) // added status code 404
    }
    return res.json(user);
}).patch((req,res)=>{
    //Edit user with ID 
    res.json({status:"pending"});
}).delete((req,res)=>{
   //Delete user with ID 
    const id = req.params.id;
    users.pop(id);
    res.json({status:"pending"});
})

app.post('/api/users', (req,res)=>{
    const body = req.body;  //The request/content sent from the frontend side comes in req.body
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title ){
        return res.status(400).json({msg: "All fields are required..."}) // Added status codes - 400
    }
    users.push({...body,id:users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err,dats)=>{
      return res.status(201).send({status:"pending",id:users.length});
    })
    
})

app.listen(PORT, ()=>console.log("Server Started at port:"+PORT));