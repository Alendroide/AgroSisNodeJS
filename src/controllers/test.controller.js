import pool from "../db.js";

const test = async(req,res) => {
    try{
        const [tables] = await pool.query("SHOW TABLES");
        res.status(200).json(tables);
    }
    catch(error){
        res.status(500).json({msg:"Internal server error"});
        console.error(error);
    }
};

export default test;