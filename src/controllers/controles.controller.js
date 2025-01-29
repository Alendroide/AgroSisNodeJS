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
