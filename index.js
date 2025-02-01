//Importaciones
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

//Inicializaciones
const app = express();

//Routers
import testRouter from './src/routers/test.router.js';
import evapotranspiraciones from './src/routers/evapotranspiraciones.router.js';
import temperaturas from './src/routers/temperaturas.router.js';
import iluminaciones from './src/routers/iluminaciones.router.js';
import precipitaciones from './src/routers/precipitaciones.router.js';
import velocidadViento from './src/routers/velocidadViento.router.js';

app.use(testRouter);
app.use(evapotranspiraciones);
app.use(iluminaciones)
app.use(precipitaciones)
app.use(temperaturas)
app.use(velocidadViento)

//404
app.use((req,res)=>{
    res.status(404).json({msg:"404 - Not Found"});
});

//Arranque del servidor
app.listen(process.env.PORT,()=>{
    console.log("Server running on port: ",process.env.PORT);
});