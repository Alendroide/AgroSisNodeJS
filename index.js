//Importaciones
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

//Inicializaciones
const app = express();

//Routers
import testRouter from './src/routers/test.router.js';
import cosechas from './src/routers/cosechas.router.js';
import desechos from './src/routers/desechos.router.js';
import especies from './src/routers/especies.router.js';
import semilleros from './src/routers/semilleros.router.js';
import tiposDesecho from './src/routers/tiposDesecho.router.js';
import tiposEspecie from './src/routers/tiposEspecie.router.js';
import ventas from './src/routers/ventas.router.js';
app.use(testRouter);
app.use(cosechas)
app.use(desechos)
app.use(especies)
app.use(semilleros)
app.use(tiposDesecho)
app.use(tiposEspecie)
app.use(ventas)

//404
app.use((req,res)=>{
    res.status(404).json({msg:"404 - Not Found"});
});

//Arranque del servidor
app.listen(process.env.PORT,()=>{
    console.log("Server running on port: ",process.env.PORT);
});