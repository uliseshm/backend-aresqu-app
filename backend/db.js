//TODO: actualizar los import
import { createPool } from "mysql";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aresqu'
})