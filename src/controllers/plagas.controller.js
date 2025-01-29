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
