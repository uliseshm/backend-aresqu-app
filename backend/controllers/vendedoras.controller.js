import { pool } from "../db.js";

//funcione que manejan las peticiones HTTP
export const getVendedoras = async (req, res) => {
    const query = "SELECT * FROM vendedoras";
    await pool.query(query, (error, data) =>{
        if(error) return res.json(error)
            return res.json(data)
    })
}

export const createVendedora = async (req, res) => {
    const {nombre, direccion, ruta, puntos, telefono} = req.body;
    const query = "INSERT INTO vendedoras (nombre, direccion, ruta, puntos, telefono) VALUES (?,?,?,?,?)";
    pool.query(query, [nombre, direccion, ruta, puntos, telefono]);
}