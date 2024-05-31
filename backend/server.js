import express from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';
import vendedorasRoutes from './routes/vendedoras.routes.js';


const app = express()
app.use(express.json());
app.use(cors())
app.use(vendedorasRoutes);


//conexion a mysql
// const conexion = createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'aresqu'
// })

// app.get('/', (request, response) => {
//     return response.json("CONECTADO AL BACKEND CON NODEJS Y EXPRESS");
// })

//solicitud a la tabla vendedoras
// app.get('/vendedoras', (request, response) => {
//     const consulta = "SELECT * FROM vendedoras";
//     conexion.query(consulta, (error, data) => {
//         if (error) return response.json(error);
//         return response.json(data);
//     })
// })

//insertar los datos del formulario a la DB
//creo se utiliza el metodo post
//REVISAR PORQUE NO SE INSERTAN LOS DATOS A LA DB

//FUNCIONA!!!
// app.post('/vendedoras', (request, response) => {

//     const { nombre, direccion, ruta, puntos, telefono } = request.body;
//     const queryInsertar = "INSERT INTO vendedoras (nombre, direccion, ruta, puntos, telefono) VALUES (?,?,?,?,?)";

//     conexion.query(queryInsertar, [nombre, direccion, ruta, puntos, telefono]);

//     response.status(201);
// })


app.listen(3000, () => {
    console.log("ESCUCHANDO EN EL PUERTO 3000...");
})