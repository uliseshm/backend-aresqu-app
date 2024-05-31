//TODO: arreglar los import 
import { Router } from "express";
import { getVendedoras, createVendedora } from "../controllers/vendedoras.controller.js";


const router = Router();

//se crean las rutas
router.get('/vendedoras', getVendedoras);

router.post('/vendedoras', createVendedora);

export default router;