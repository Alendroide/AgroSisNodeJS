import pool from '../db.js'

export const ListarCultivos = async (req, res) => {
    try {
        const sql = `SELECT * FROM cultivos`
        const [result] = await pool.query(sql)
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al listar los cultivos" });
    }
}
export const RegistrarCultivos = async (req, res) => {
    try {
        const {fk_Especies, nombre, unidades, activo, fechaSiembra} = req.body
        const sql = `INSERT INTO cultivos (fk_Especies, nombre, unidades, activo, fechaSiembra) VALUES (?,?,?,?,?)`
        const [rows] = await pool.query(sql, [fk_Especies, nombre, unidades, activo, fechaSiembra])
        return res.status(201).json({ "message": "Cultivo registrado correctamente" });
        } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al registrar el cultivo" });
    }
}
export const ActualizarCultivos = async (req, res) => {
    try {
        const {fk_Especies, nombre, unidades, activo, fechaSiembra} = req.body
        const {id} = req.params.id
        const sql = `UPDATE cultivos SET fk_Especies=?, nombre=?, unidades=?, activo=?, fechaSiembra=? WHERE id=?`
        const [rows] = await pool.query(sql, [fk_Especies, nombre, unidades, activo, fechaSiembra, id])
        if (rows.affectedRows === 0) {
            return res.status(404).json({ "message": "Cultivo no encontrado" });
        }
        return res.status(200).json({ "message": "Cultivo actualizado correctamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al actualizar el cultivo" });
    }
}
export const EliminarCultivos = async (req, res) => {
    try {
        const {id} = req.params.id
        const sql = `DELETE FROM cultivos WHERE id=?`
        const [rows] = await pool.query(sql, [id])
        return res.status(200).json({ "message": "Cultivo eliminado correctamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al eliminar el cultivo" });
    }
}
export const BuscarCultivo = async (req, res) => {
    try {
        const id = req.params.id
        const sql = `SELECT * FROM cultivos WHERE id=?`
        const [result] = await pool.query(sql, [id])
        if (result.length > 0) {
            return res.status(200).json(result[0]);
        } else {
            return res.status(404).json({ "message": "Cultivo no encontrado" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al buscar el cultivo" });
    }
}
export const ListarCultivosPorEspecie = async (req, res) => {
    try {
        const fk_Especies = req.params.id
        const sql = `SELECT * FROM cultivos WHERE fk_Especies=?`
        const [result] = await pool.query(sql, [fk_Especies])
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al listar los cultivos por especie" });
    }
}
export const ListarCultivosActivos = async (req, res) => {
    try {
        const sql = `SELECT * FROM cultivos WHERE activo=1`
        const [result] = await pool.query(sql)
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al listar los cultivos activos" });
    }
}
export const ListarCultivosPorSiembra = async (req, res) => {
    try {
        const fechaSiembra = req.params.fecha
        const sql = `SELECT * FROM cultivos WHERE fechaSiembra=?`
        const [result] = await pool.query(sql, [fechaSiembra])
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al listar los cultivos por fecha de siembra" });
    }
}
//reportes

export const ReporteCultivosPorEspecie = async (req, res) => {
    try {
        const fk_Especies = req.params.id
        const sql = `SELECT nombre, COUNT(*) as cantidad FROM cultivos WHERE fk_Especies=? GROUP BY nombre`
        const [result] = await pool.query(sql, [fk_Especies])
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al generar el reporte de cultivos por especie" });
    }
}
export const ReporteCultivosActivos = async (req, res) => {
    try {
        const sql = `SELECT nombre, COUNT(*) as cantidad FROM cultivos WHERE activo=1 GROUP BY nombre`
        const [result] = await pool.query(sql)
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al generar el reporte de cultivos activos" });
    }
}
export const ReporteCultivosPorSiembra = async (req, res) => {
    try {
        const fechaSiembra = req.params.fecha
        const sql = `SELECT nombre, COUNT(*) as cantidad FROM cultivos WHERE fechaSiembra=? GROUP BY nombre`
        const [result] = await pool.query(sql, [fechaSiembra])
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al generar el reporte de cultivos por fecha de siembra" });
    }
}
