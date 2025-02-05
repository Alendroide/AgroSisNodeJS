//Importaciones
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();


//Inicializaciones
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

//Routers
import testRouter from './src/routers/test.router.js';
import usuariosRouter from './src/routers/usuarios.router.js';
import pasantesRouter from './src/routers/pasantes.router.js';
app.use(testRouter);
app.use(usuariosRouter);
app.use(pasantesRouter);
import eras from './src/routers/eras.router.js'
import lotes from './src/routers/lotes.router.js'
import pHs from './src/routers/pHs.router.js'
import humedadTerreno from './src/routers/humedadTerreno.router.js'
import cultivos from './src/routers/cultivos.router.js'
import plantaciones from './src/routers/plantaciones.router.js'

//control eras
app.use(eras)
app.use(lotes)
app.use(pHs)
app.use(humedadTerreno)
app.use(cultivos)
app.use(plantaciones)

//404
app.use((req,res)=>{
    res.status(404).json({msg:"404 - Not Found"});
});

//Arranque del servidor
app.listen(process.env.PORT,()=>{
    console.log("Server running on port: ",process.env.PORT);
});