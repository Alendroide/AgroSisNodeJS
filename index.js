//Importaciones
import express from "express";
import dotenv from "dotenv";
dotenv.config();


//Inicializaciones
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

//Routers
import testRouter from "./src/routers/test.router.js";
import rutaTipoPlaga from "./src/routers/tipoPlaga.router.js";
import rutaPlagas from "./src/routers/plagas.router.js";
import rutaAfecciones from "./src/routers/afecciones.router.js";
import rutaTiposControl from "./src/routers/tiposControl.router.js";
import rutaControles from "./src/routers/controles.router.js";
import rutaProductosControl from "./src/routers/productosControl.router.js";
import rutaUsoProductoControl from "./src/routers/usoProductoControl.router.js";
import usuariosRouter from './src/routers/usuarios.router.js';
import pasantesRouter from './src/routers/pasantes.router.js';
import evapotranspiraciones from './src/routers/evapotranspiraciones.router.js';
import temperaturas from './src/routers/temperaturas.router.js';
import iluminaciones from './src/routers/iluminaciones.router.js';
import precipitaciones from './src/routers/precipitaciones.router.js';
import velocidadViento from './src/routers/velocidadViento.router.js';

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
app.use(evapotranspiraciones);
app.use(iluminaciones)
app.use(precipitaciones)
app.use(temperaturas)
app.use(velocidadViento)
app.use(rutaTipoPlaga);
app.use(rutaPlagas);
app.use(rutaAfecciones);
app.use(rutaTiposControl);
app.use(rutaControles);
app.use(rutaProductosControl);
app.use(rutaUsoProductoControl);

//404
app.use((req, res) => {
  res.status(404).json({ msg: "404 - Not Found" });
});

//Arranque del servidor
app.listen(process.env.PORT, () => {
  console.log("Server running on port: ", process.env.PORT);
});
