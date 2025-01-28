import pool from "../db.js";

export default listarTipoPlaga = async (req, resp) => {
  try {
    const [result] = await mysql.query("select * from tiposplaga");
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
