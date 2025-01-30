import pool from "../db.js";

export const listarUsoProductoControl = async (req, resp) => {
  try {
    const [result] = await pool.query("SELECT * FROM usoproductocontrol");
    if (result.length > 0) {
      return resp.status(200).json(result);
    } else {
      return resp.status(404).json({
        message: "registros de productos usados en controles no encontrados",
      });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "Error en el sistema" });
  }
};

export const registrarUsoProductosControl = async (req, resp) => {
  try {
    const { fk_ProductosControl, fk_Controles, cantidadProducto } = req.body;

    const sql = `INSERT INTO usoproductocontrol (fk_ProductosControl, fk_Controles, cantidadProducto) VALUES (?,?,?)`;

    const [rows] = await pool.query(sql, [
      fk_ProductosControl,
      fk_Controles,
      cantidadProducto,
    ]);

    if (rows.affectedRows > 0) {
      return resp
        .status(200)
        .json({ message: "se ha registrado correctamente" });
    } else {
      return resp.status(400).json({ message: "No fue posible registrar" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "Error en el sistema" });
  }
};

export const actualizarUsoProductoControl = async (req, resp) => {
  try {
    const id = req.params.id;
    const { fk_ProductosControl, fk_Controles, cantidadProducto } = req.body;
    const sql = `UPDATE usoproductocontrol SET fk_ProductosControl=?, fk_Controles=?, cantidadProducto=?  WHERE id=${id}`;

    const [rows] = await pool.query(sql, [
      fk_ProductosControl,
      fk_Controles,
      cantidadProducto,
    ]);

    if (rows.affectedRows > 0) {
      return resp
        .status(200)
        .json({ message: "uso del producto de control actualizado" });
    } else {
      return resp.status(400).json({ message: "No fue posible actualizar " });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "Error en el sistema" });
  }
};

export const eliminarUsoProductoControl = async (req, resp) => {
  try {
    const id = req.params.id;
    const sql = `DELETE FROM usoproductocontrol WHERE id=${id}`;

    const [rows] = await pool.query(sql);

    if (rows.affectedRows > 0) {
      return resp
        .status(200)
        .json({ message: "se ha eliminado correctamente" });
    } else {
      return resp.status(400).json({
        message: "no fue posible eliminar el registro de uso del producto",
      });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "Error en el sistema" });
  }
};

export const buscarUsoProductoControl = async (req, resp) => {
  try {
    const id = req.params.id;
    const [result] = await pool.query(
      `SELECT * FROM usoproductocontrol WHERE id=${id}`
    );

    if (result.length > 0) {
      return resp.status(200).json(result);
    } else {
      return resp.status(404).json({ message: "registro no encotrado" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "Error en el sistema" });
  }
};
