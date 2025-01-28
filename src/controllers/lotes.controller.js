import pool from '../db.js'

export const ListarLotes = async (req, res) => {
    try {
        const sql = `SELECT * FROM lotes`
        const [result] = await pool.query(sql)
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Error al listar los lotes" });
    }
}
export const RegistrarLotes = async (req, res) => {
    try {
        const { nombre, descripcion, tamX, tamY, estado, posX, posY } = req.body;

        if (!nombre || !descripcion || !tamX || !tamY || !estado || !posX || !posY) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const sql = `
            INSERT INTO lotes (nombre, descripcion, tamX, tamY, estado, posX, posY) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const [rows] = await pool.query(sql, [nombre, descripcion, tamX, tamY, estado, posX, posY]);

        return res.status(201).json({ message: "Lote registrado correctamente" });
    } catch (error) {
        console.error(error);

        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ message: "El nombre del lote ya existe. Debe ser único." });
        }

        return res.status(500).json({ message: "Error al registrar el lote" });
    }
};

export const ActualizarLotes = async (req, res) => {
    try {
        const { nombre, descripcion, tamX, tamY, estado, posX, posY } = req.body;
        const id = req.params.id; 
        const sql = `
            UPDATE lotes 
            SET nombre = ?, descripcion = ?, tamX = ?, tamY = ?, estado = ?, posX = ?, posY = ? 
            WHERE id = ?
        `;
        const [rows] = await pool.query(sql, [nombre, descripcion, tamX, tamY, estado, posX, posY, id]);

        if (rows.affectedRows > 0) {
            return res.status(200).json({ message: "Lote actualizado correctamente" });
        } else {
            return res.status(404).json({ message: "Lote no encontrado" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error del sistema" });
    }
};

export const EliminarLotes = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = `DELETE FROM lotes WHERE id = ?`;
        const [rows] = await pool.query(sql, [id]);
        
        if (rows.affectedRows > 0) {
            return res.status(200).json({ message: "Lote eliminado correctamente" });
        } else {
            return res.status(404).json({ message: "Lote no encontrado" });
        }
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error del sistema" });
    }
}
export const BuscarLotes = async (req, res) => {
    try {
        const id = req.params.id
        const sql = `SELECT * FROM lotes WHERE id =?`
        const [result] = await pool.query(sql, [id])
        if (result.length > 0) {
            return res.status(200).json(result);
        } else {
            return res.status(404).json({ message: "Lote no encontrado" });
        }

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error del sistema" });
    }
}