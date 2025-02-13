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
        const { fk_Cultivos, fk_Eras } = req.body;

        if (!fk_Cultivos || !fk_Eras) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const sql = `INSERT INTO plantaciones (fk_Cultivos, fk_Eras) VALUES (?,?)`;
        const [rows] = await pool.query(sql, [fk_Cultivos, fk_Eras]);

        return res.status(201).json({ message: "Plantación registrada correctamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al registrar la plantación" });
    }
};

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
export const ListarPlantacionesPorEraYCultivo = async (req, res) => {
    try {
        const {fk_Eras, fk_Cultivos} = req.params
        const sql = `SELECT * FROM plantaciones WHERE fk_Eras=? AND fk_Cultivos=?`
        const [result] = await pool.query(sql, [fk_Eras, fk_Cultivos])
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al listar las plantaciones por era y cultivo" });
    }
}
export const ListarPlantacionesPorEra = async (req, res) => {
    try {
        const {fk_Eras} = req.params
        const sql = `SELECT * FROM plantaciones WHERE fk_Eras=?`
        const [result] = await pool.query(sql, [fk_Eras])
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al listar las plantaciones por era" });
    }
}
export const ListarPlantacionesPorCultivo = async (req, res) => {
    try {
        const {fk_Cultivos} = req.params
        const sql = `SELECT * FROM plantaciones WHERE fk_Cultivos=?`
        const [result] = await pool.query(sql, [fk_Cultivos])
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al listar las plantaciones por cultivo" });
    }
}
export const ListarPlantacionesPorCultivoYEra = async (req, res) => {
    try {
        const {fk_Cultivos, fk_Eras} = req.params
        const sql = `SELECT * FROM plantaciones WHERE fk_Cultivos=? AND fk_Eras=?`
        const [result] = await pool.query(sql, [fk_Cultivos, fk_Eras])
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al listar las plantaciones por cultivo y era" });
    }
}
//reportes
 export const ReportePlantacionesPorEra = async (req, res) => {
    try {
        const {fk_Eras} = req.params
        const sql = `SELECT COUNT(*) as cantidad, fk_Cultivos FROM plantaciones WHERE fk_Eras=? GROUP BY fk_Cultivos`
        const [result] = await pool.query(sql, [fk_Eras])
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al generar el reporte de plantaciones por era" });
    }
}
export const ReportePlantacionesPorCultivo = async (req, res) => {
    try {
        const {fk_Cultivos} = req.params
        const sql = `SELECT COUNT(*) as cantidad, fk_Eras FROM plantaciones WHERE fk_Cultivos=? GROUP BY fk_Eras`
        const [result] = await pool.query(sql, [fk_Cultivos])
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al generar el reporte de plantaciones por cultivo" });
    }
}
export const ReportePlantacionesPorCultivoYEra = async (req, res) => {
    try {
        const {fk_Cultivos, fk_Eras} = req.params
        const sql = `SELECT COUNT(*) as cantidad FROM plantaciones WHERE fk_Cultivos=? AND fk_Eras=?`
        const [result] = await pool.query(sql, [fk_Cultivos, fk_Eras])
        return res.status(200).json(result[0]);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al generar el reporte de plantaciones por cultivo y era" });
    }
}
