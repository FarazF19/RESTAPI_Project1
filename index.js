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
    const id = req.params.id;
    users.pop(id);
    res.json({status:"pending"});
})

app.post('/api/users', (req,res)=>{
    const body = req.body;  //The request/content sent from the frontend side comes in req.body
    users.push({...body,id:users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err,dats)=>{
      return res.send({status:"pending",id:users.length});
    })
    
})

app.listen(PORT, ()=>console.log("Server Started at port:"+PORT));