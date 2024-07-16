const express = require ("express");

const {connectMongoDb} = require('./connection');

const userRouter = require('./routes/user');

const {logReqRes} = require('./middlewares')



const app = express();

//Connect MongoDB
connectMongoDb("mongodb://127.0.0.1:27017/sample-app").then(()=>{
    console.log("MongoDB Connected");
});

//Middleware - Plugin
app.use(express.urlencoded({extended:false}));

app.use(logReqRes("log.txt"));

//Middlewares 
// app.use((req,res,next)=>{
// console.log("Hello from Middleware-1");
// next();
// })

// app.use((req,res,next)=>{
// console.log("Hello from Middleware-2");
// next();
// })

const PORT = 4000;

//Routes
app.use('/api/users',userRouter); // Use userRouter to create/map /user request

app.listen(PORT, ()=>console.log("Server Started at port:"+PORT));