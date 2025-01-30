import pool from '../db.js'

export const ListarPlantaciones = async (req, res) => {
    try {
        const sql = `SELECT * FROM plantaciones`
        const [result] = await pool.query(sql)
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al listar las plantaciones" });
    }
}
export const RegistrarPlantaciones = async (req, res) => {
    try {
        const {fk_Cultivos, fk_Eras} = req.body
        const sql = `INSERT INTO plantaciones (fk_Cultivos, fk_Eras) VALUES (?,?,)`
        const [rows] = await pool.query(sql, [fk_Cultivos, fk_Eras])
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al registrar la plantación" });
    }
}
export const ActualizarPlantaciones = async (req, res) => {
    try {
        const {fk_Cultivos, fk_Eras} = req.body
        const {id} = req.params.id
        const sql = `UPDATE plantaciones SET fk_Cultivos=?, fk_Eras=? WHERE id=?`
        const [rows] = await pool.query(sql, [fk_Cultivos, fk_Eras, id])
        return res.status(200).json({ "message": "Plantación actualizada correctamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al actualizar la plantación" });
    }
}
export const EliminarPlantaciones = async (req, res) => {
    try {
        const {id} = req.params.id
        const sql = `DELETE FROM plantaciones WHERE id=?`
        const [rows] = await pool.query(sql, [id])
        return res.status(200).json({ "message": "Plantación eliminada correctamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al eliminar la plantación" });
    }
}
export const BuscarPlantaciones = async (req, res) => {
    try {
        const id = req.params.id
        const sql = `SELECT * FROM plantaciones WHERE id=?`
        const [result] = await pool.query(sql, [id])
        return res.status(200).json(result[0]);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al buscar la plantación" });
    }
}