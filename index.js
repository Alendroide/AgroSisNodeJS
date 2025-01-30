//Importaciones
import express from "express";
import dotenv from "dotenv";
dotenv.config();

//Inicializaciones
const app = express();
app.use(express.json());

//Routers
import testRouter from "./src/routers/test.router.js";
import rutaTipoPlaga from "./src/routers/tipoPlaga.router.js";
import rutaPlagas from "./src/routers/plagas.router.js";
import rutaAfecciones from "./src/routers/afecciones.router.js";
import rutaTiposControl from "./src/routers/tiposControl.router.js";
import rutaControles from "./src/routers/controles.router.js";
import rutaProductosControl from "./src/routers/productosControl.router.js";
app.use(testRouter);
app.use(rutaTipoPlaga);
app.use(rutaPlagas);
app.use(rutaAfecciones);
app.use(rutaTiposControl);
app.use(rutaControles);
app.use(rutaProductosControl);

//404
app.use((req, res) => {
  res.status(404).json({ msg: "404 - Not Found" });
});

//Arranque del servidor
app.listen(process.env.PORT, () => {
  console.log("Server running on port: ", process.env.PORT);
});
