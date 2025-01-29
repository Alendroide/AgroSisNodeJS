import pool from "../db.js";

export const listarAfecciones = async (req, resp) => {
  try {
    const [result] = await pool.query("select * from afecciones");
    if (result.length > 0) {
      return resp.status(200).json(result);
    } else {
      return resp.status(404).json({ message: "afecciones no encontradas" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "error en el sistema" });
  }
};

export const registrarAfecciones = async (req, resp) => {
  try {
    const { fk_Plantaciones, fk_Plagas, fechaEncuentro, estado } = req.body;
    const sql = `insert into afecciones (fk_Plantaciones,fk_Plagas,fechaEncuentro,estado) values (?,?,?,?)`;
    const [rows] = await pool.query(sql, [
      fk_Plantaciones,
      fk_Plagas,
      fechaEncuentro,
      estado,
    ]);
    if (rows.affectedRows > 0) {
      return resp.status(200).json({ message: " afeccion registrada" });
    } else {
      return resp
        .status(400)
        .json({ message: " la nueva afeccion no pudo ser registrada" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "error en el sistema" });
  }
};

export const actualizarAfecciones = async (req, resp) => {
  try {
    const id = req.params.id;
    const { fk_Plantaciones, fk_Plagas, fechaEncuentro, estado } = req.body;
    const sql = `update afecciones set fk_Plantaciones=?,fk_Plagas=?,fechaEncuentro=?,estado=? where id=${id}`;

    const [rows] = await pool.query(sql, [
      fk_Plantaciones,
      fk_Plagas,
      fechaEncuentro,
      estado,
    ]);
    if (rows.affectedRows > 0) {
      return resp.status(200).json({ message: "afeccion actualizada" });
    } else {
      return resp
        .status(400)
        .json({ message: "no fue posible actualizar esta afeccion" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "error en el sistema" });
  }
};

export const eliminarAfecciones = async (req, resp) => {
  try {
    const id = req.params.id;
    const sql = `delete from afecciones where id=${id}`;

    const [rows] = await pool.query(sql);
    if (rows.affectedRows > 0) {
      return resp.status(200).json({ message: "tipo de afeccion eliminada" });
    } else {
      return resp
        .status(400)
        .json({ message: "no fue posible eliminar la afeccion" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "error en el sistema" });
  }
};

export const buscarAfecciones = async (req, resp) => {
  try {
    const id = req.params.id;
    const [result] = await pool.query(
      `select * from afecciones where id=${id}`
    );
    if (result.length > 0) {
      return resp.status(200).json(result);
    } else {
      return resp.status(404).json({ message: "afeccion no encontrada" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ message: "error en el sistema" });
  }
};
