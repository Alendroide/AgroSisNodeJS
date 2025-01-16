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


export async function create(req,res){
    try{
        const { identificacion, nombre, apellidos, fechaNacimiento, telefono, correoElectronico, password } = req.body;
        const id = parseInt(identificacion);
        const sql = 'INSERT INTO Usuarios VALUES (?,?,?,?,?,?,?,?)';
        const passwordHash = await bcrypt.hash(password,10);
        const [result] = await pool.query(sql,[id,nombre,apellidos,fechaNacimiento,telefono,correoElectronico,passwordHash,0]);
        if(result.affectedRows > 0){
            return res.status(201).json({msg:"Usuario created successfully"});
        }
        res.status(400).json({msg:"Error creating usuario"});
    }
    catch(error){
        console.error(error);
        res.status(500).json({msg:"Internal server error"});
    }
}