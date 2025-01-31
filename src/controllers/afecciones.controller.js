import pool from "../db.js";

export const listarAfecciones = async (req, resp) => {
  try {
    const sql = `select a.id, a.fechaEncuentro, a. estado, a.fk_plagas,
    p.nombre as nombre_plaga, p.fk_TiposPlaga as idTipoPlaga, tp.nombre as tipo_plaga,
    c.nombre as nombre_cultivo, c.unidades as unCultivo,
    pl.id as id_plantaciones
    from afecciones a
    join plagas p on a.fk_Plagas = p.id
    join tiposPlaga tp on p.fk_TiposPlaga = tp.id
    join plantaciones pl on fk_Plantaciones = pl.id
    join cultivos c on fk_Cultivos = c.id`;
    const [result] = await pool.query(sql);
    if (result.length > 0) {
      const afecciones = result.map((afeccion) => ({
        id: afeccion.id,
        fechaEncuentro: afeccion.fechaEncuentro,
        estado: afeccion.estado,
        fk_Plagas: {
          idPlaga: afeccion.id,
          nombre: afeccion.nombre_plaga,
          fk_tipo_Plaga: {
            id_Tipo_Plaga: afeccion.idTipoPlaga,
            nombre: afeccion.tipo_plaga,
          },
        },
      }));
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
