import pool from "../db.js";

export const listarPlagas = async (req, resp) => {
  try {
    const [result] = await pool.query("select * from plagas");
    if (result.length > 0) {
      return resp.status(200).json(result);
    } else {
      return resp.status(404).json({ message: "plaga no encontrados" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "error en el sistema" });
  }
};

export const registrarPlagas = async (req, resp) => {
  try {
    const { nombre, descripcion, img } = req.body;
    const sql = `insert into plagas (fk_TiposPlaga,nombre,descripcion,img) values (?,?,?)`;
    const [rows] = await pool.query(sql, [
      fk_TiposPlaga,
      nombre,
      descripcion,
      img,
    ]);
    if (rows.affectedRows > 0) {
      return resp.status(200).json({ message: " plaga registrada" });
    } else {
      return resp
        .status(400)
        .json({ message: " nueva plaga no se pudo registrar" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "error en el sistema" });
  }
};
