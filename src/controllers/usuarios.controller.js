import pool from '../db.js';
import bcrypt from 'bcrypt';

export async function getAll(req,res){
    try{
        const sql = 'SELECT * FROM Usuarios';
        const [usuarios] = await pool.query(sql);
        res.status(200).json(usuarios);
    }
    catch(error){
        console.error(error);
        res.status(500).json({msg:"Internal server error"});
    }
}
