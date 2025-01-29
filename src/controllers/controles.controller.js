import pool from "../db.js";

export const listarControles = async (req, resp) => {
  try {
    const [result] = await pool.query("SELECT * FROM controles");
    if (result.length > 0) {
      return resp.status(200).json(result);
    } else {
      return resp.status(404).json({ message: "controles no encontrados" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "Error en el sistema" });
  }
};

export const registrarControles = async (req, resp) => {
  try {
    const { fk_Afecciones, fk_TiposControl, descripcion, fechaControl } =
      req.body;
    const sql = `INSERT INTO controles (fk_Afecciones, fk_TiposControl,descripcion,fechaControl) VALUES (?,?,?,?)`;
    const [rows] = await pool.query(sql, [
      fk_Afecciones,
      fk_TiposControl,
      descripcion,
      fechaControl,
    ]);

    if (rows.affectedRows > 0) {
      return resp.status(200).json({ message: "Tipo de control registrado" });
    } else {
      return resp
        .status(400)
        .json({ message: "No se pudo registrar el tipo de control" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "Error en el sistema" });
  }
};

export const actualizarControles = async (req, resp) => {
  try {
    const id = req.params.id;
    const { fk_Afecciones, fk_TiposControl, descripcion, fechaControl } =
      req.body;
    const sql = `UPDATE tiposcontrol SET fk_Afecciones=?, fk_TiposControl=?, descripcion=?,fechaControl=?
     WHERE id=${id}`;

    const [rows] = await pool.query(sql, [
      fk_Afecciones,
      fk_TiposControl,
      descripcion,
      fechaControl,
    ]);

    if (rows.affectedRows > 0) {
      return resp.status(200).json({ message: "control actualizado" });
    } else {
      return resp
        .status(400)
        .json({ message: "No se pudo actualizar el control" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "Error en el sistema" });
  }
};
