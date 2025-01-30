import pool from "../db";

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
