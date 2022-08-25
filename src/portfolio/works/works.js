
// import WorksContainer

import WorksContainer from "./worksContainer/WorksContainer.js";

// jsonData

const PortfolioJson = [{
    Title: "Nexxo",
    CardImg: "Freelance.png",
    Description:{
        text: "Nexxo es mi proyecto mas grande hasta la fecha y es el que mas ilustra mis capacidades como programador, es una pagina para la comunidad freelance en la que sus participantes pueden ser vendedores/compradores, pueden publicitar sus servicios o buscar personas que ofrezcan un trabajo en particular.",
        technology: ["React", "Mysql", "Node.js", "Express.js", "Firebase", "CSS"]
    },
    CardInfo:[{
        id: 0,
        img: ["Work_in_progress.png"],
        info: "No hay imagenes de momento por ser un proyecto aun no terminado, pero dejo los links con el codigo del front-end/back-end"
    }],
        Code:{
            BackEnd_code: "https://github.com/francobertin6/Nexxo_Backend",
            FrontEnd_code: "https://github.com/francobertin6/Nexxo"
        }    
},{
    Title: "Inventario",
    CardImg: "Inventario.png",
    Description:{
        text: "Este proyecto es mi primer app para windows y mi primer y unico proyecto usando Electron.js, en el pueden almacenarse productos con diversas propiedades, guardar proveedores con sus datos y catalogar productos segun su estado.",
        technology: ["typescript", "mysql", "node.js", "express.js", "electron.js", "HTML", "CSS"]
    },
    CardInfo:[{
        id: 0,
        img: ["Inventario2.png"],
        info: "El inventario "
    },{
        id: 1,
        img: ["Opciones.png", "OpcionesColores.png"],
        info: "Cada item tiene opciones para cambiar la condicion del producto (Favorito, Vendido, En espera No vendido) o para borrarlo."
    },{
        id: 2,
        img: ["AgregarProducto.png"],
        info: "Se puede agregar productos con distintas propiedades (Nombre, Tipo, Color, Cantidad, Medida, Costo unitario, Proveedor)."
    },{
        id: 3,
        img: ["Proveedores.png","AgregarProveedor.png"],
        info: "Lista de proveedores con sus propiedades (Nombre, Email, Telefono, Descripcion) y forma de agregarlos."
    },{
        id: 4,
        img: ["Buscador.png", "Buscador2.png"],
        info: "Barra de busqueda con sugerencias segun lo que escribas, propiedad por cual buscar el producto y lista de productos que van siendo encontrados."
    }],
    Code:{
        General_code: "https://github.com/francobertin6/inventario_electron_merge"
    }
},{
    Title: "Delihla Resto",
    CardImg: "DelihlaResto.png",
    Description:{
        text: "Delihla Resto es mi proyecto evaluativo del primer curso que hize en acamica, es una pagina web enfocada para celulares, una tienda virtual de un restorant en el que se podrian comprar productos. Ademas de tener una parte de administrador que ofrece opciones para el manejo de la pagina ",
        technology: ["Javascript", "CSS", "HTML", "Mysql", "Node.js", "Express.js"]
    },
    CardInfo:[{
        id: 1,
        img: ["Delilah_login.png", "Delilah_Register.png"],
        info: "Formulario de Inicio de sesion y Registro de pagina Delilah."
    },{
        id: 2,
        img: ["Delilah.png", "Delilah_MainMenu2.png","Delilah_MainMenu.png"],
        info: "Pagina principal de la pagina, Se ven las categorias, y el menu del local."
    },{
        id: 3,
        img: ["Delilah_Canasto.png", "Delilah_VentaConcretada.png"],
        info: "Canasto de la pagina, detalle de producto y cantidad a elegir y confirmacion de pedido."
    },{
        id: 4,
        img: ["Delilah_AdminSales.png", "Delilah_AdminOptions.png"],
        info: "Pagina del administrador, donde salen todos los pedidos hechos por los clientes y su estado (Nueve, Preparando, Confirmado, Enviando, Entregado). "
    },{
        id: 5,
        img: ["Delilah_Menu.png", "Delilah_ModifyItem.png", "Delilah_DeleteOrders.png", "Delilah_DeleteItem.png", "Delilah_CreateProducts.png", "Delilah_CreateAdmins.png"],
        info: "Menu del admin y sus opciones ( modificar productos, eliminar ordenes, eliminar items, creacion de producto y creacion de administradores nuevo )."
    },{
        id: 6,
        img: ["Delilah_Warnings.png", "Delilah_Warnings2.png"],
        info: "Confirmacion de eliminacion de productos o ordenes."
    }],
    Code:{
        BackEnd_code: "https://github.com/francobertin6/TRABAJO-dilihla-resto-backend",
        FrontEnd_code: "https://github.com/francobertin6/TRABAJO-dilihla-resto-frontend"
    }
}]

const Works = () => {
 
    return(
        <section id="WorksContainer">
        {PortfolioJson.map( (element) => {
            return(
                <WorksContainer data = {element}/>
            )
        } )}
        </section>
    )
}

export default Works;