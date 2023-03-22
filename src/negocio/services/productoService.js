import Productos  from "../models/producto.js"
import { Products } from '../repository/producto/index.js';

class ProductoServicio{


    async grabarProducto(producto){
        const productos = new Productos(producto);        
        const registroNuevoProducto = await Products.guardarProducto(productos)
        return registroNuevoProducto
    }


    async listarProducto() {
        try {
                const listadoProducts = await Products.listarProducto()
                const products = []
                listadoProducts.forEach(d => {
                    products.push(d.datos())
                });
                return products
        } catch (error) {
            return error
        }
    }

}


export const productoServicio = new ProductoServicio()