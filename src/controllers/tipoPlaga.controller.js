import pool from "../db.js";

export const listarTipoPlaga = async (req, resp) => {
  try {
    const [result] = await pool.query("select * from tiposplaga");
    if (result.length > 0) {
      return resp.status(200).json(result);
    } else {
      return resp
        .status(404)
        .json({ message: "tipos de plaga no encontrados" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "error en el sistema" });
  }
};

export const registrarTipoPlaga = async (req, resp) => {
  try {
    const { nombre, descripcion, img } = req.body;
    const sql = `insert into tiposplaga (nombre,descripcion,img) values (?,?,?)`;
    const [result] = await pool.query(sql, [nombre, descripcion, img]);
    if (result.length > 0) {
      return resp.status(200).json({ message: "tipo de plaga registrada" });
    } else {
      return resp
        .status(400)
        .json({ message: "el articulo no se pudo registrar" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "error en el sistema" });
  }
};
