//Importaciones
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

//Inicializaciones
const app = express();

//Routers
import testRouter from './src/routers/test.router.js';
import usuariosRouter from './src/routers/usuarios.router.js';
app.use(testRouter);
app.use(usuariosRouter);

//404
app.use((req,res)=>{
    res.status(404).json({msg:"404 - Not Found"});
});

//Arranque del servidor
app.listen(process.env.PORT,()=>{
    console.log("Server running on port: ",process.env.PORT);
});