import pool from "../db.js";

export const listarProductosControl = async (req, resp) => {
  try {
    const [result] = await pool.query("SELECT * FROM productoscontrol");
    if (result.length > 0) {
      return resp.status(200).json(result);
    } else {
      return resp
        .status(404)
        .json({ message: "productos para el control no encontrados" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "Error en el sistema" });
  }
};

export const registrarProductosControl = async (req, resp) => {
  try {
    const {
      nombre,
      precio,
      compuestoActivo,
      fichaTecnica,
      contenido,
      tipoContenido,
      unidades,
    } = req.body;

    const sql = `INSERT INTO productoscontrol (nombre, precio,compuestoActivo,fichaTecnica,contenido,tipoContenido,unidades)
                VALUES (?,?,?,?,?,?,?)`;

    const [rows] = await pool.query(sql, [
      nombre,
      precio,
      compuestoActivo,
      fichaTecnica,
      contenido,
      tipoContenido,
      unidades,
    ]);

    if (rows.affectedRows > 0) {
      return resp
        .status(200)
        .json({ message: "producto de control registrado" });
    } else {
      return resp
        .status(400)
        .json({ message: "No se pudo registrar el producto de control" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "Error en el sistema" });
  }
};
