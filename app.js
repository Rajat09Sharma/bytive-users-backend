require('dotenv').config();
const express= require("express");
const bodyParser=require("body-parser");
const cors= require("cors");
const { connectToMongoDB } = require("./connection");
const UserRouter=require("./routes/users");
const PORT=process.env.PORT || 3000

const app= express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  

connectToMongoDB(process.env.URL).then(()=>console.log("MongoDB connect successfully."));

app.use("/users",UserRouter);

app.listen(PORT,()=>{
    console.log("server started successfully on port 3000.");
});
