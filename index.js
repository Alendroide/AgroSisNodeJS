import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use((req,res)=>{
    res.status(404).json({msg:"404 - Not Found"});
});

app.listen(process.env.PORT,()=>{
    console.log("Server running on port: ",process.env.PORT);
});