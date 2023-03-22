import  Producto  from '../negocio/models/producto.js';
import { Products } from '../repository/product/index.js';
import ContenedorFaker from '../../daos/container/containerFaker.js'

class ProductoServicio{


    async agregarProducto(producto){
        const productos = new Producto(producto);        
        const registroNuevoProducto = await productos.guardarProducto(producto)
        return registroNuevoProducto
    }

    async getProductos(){
        const productosList = new Producto();

        return productosList.obtenerProductos();
    }

    async getProductosFaker(objeto){
        const productosList = new Producto();

        return productosList.obtenerProductosFaker(objeto);
    }

}


export const productoServicio = new ProductoServicio()