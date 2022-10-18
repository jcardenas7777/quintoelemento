import { Nav } from "../layout/Nav.js";


import { Error404 } from "../pages/Error404.js";
import {getHash}  from "../Connection/helpers/getHash.js";
import resolverRutas from "../Connection/helpers/resolverRutas.js";
import { loginAdmin } from "../pages/Login.js";
import { CrearUsuario } from "../pages/CrearUsuario.js";
import { Footer } from "../layout/Footer.js";



const Rutas ={
    "/":loginAdmin,
    "/registrar":CrearUsuario



}


const App = async () =>{

    const header = document.querySelector("header")
    const main = document.querySelector("main")
    const footer = document.querySelector("footer")

    header.innerHTML=Nav();
    footer.innerHTML=Footer();
    let ruta = await resolverRutas(getHash());
    let pagina = await Rutas[ruta] ? Rutas[ruta] : Error404; 

    main.innerHTML = await pagina();
}
export {App}