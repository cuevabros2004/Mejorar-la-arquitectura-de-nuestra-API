
import ContenedorFaker from "../daos/container/containerFaker.js";
import { clienteSql } from '../db/clienteSql.js';
//import { Producto } from "../models/producto.js";
import { productoServicio } from "../negocio/services/productoService.js";
import loggerError from '../utils/pinoError.js';


const productsFaker = new ContenedorFaker(clienteSql, 'productos')

 
async function controladorPostProductos(req, res) {
    res.status(201);

    const datosProducto = req.body

    const resul = await productoServicio.grabarProducto(datosProducto)
        
    if(resul.message){
        loggerError(req, resul.message)
        throw(error)
    } else
       res.json(datosProducto)

    }

 

async function controladorGetProductos(req, res) {

    const productos = await productoServicio.listarProducto()
    
    if(productos.message){
        loggerError(req, error.message)
        throw(error)
    } else
        res.json(productos);

}

async function controladorGetProductosTest(req, res) {
    const productos = await productoServicio.getProductosFaker()
    
    if(productos.message) {
        loggerError(req, error.message)
        return error
    } else
      res.json(productos); 
}


function controladorproductosRandom(req, res) {
    res.send(products.getById(randomUUID()))
}




export {
    controladorGetProductos,
    controladorPostProductos,
    controladorproductosRandom,
    controladorGetProductosTest
};