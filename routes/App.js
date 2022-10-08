import { Nav } from "../layout/Nav.js";
import { RegisterUser } from "../pages/RegisterUser.js";

import { Error404 } from "../pages/Error404.js";
import {getHash}  from "../Connection/helpers/getHash.js";
import resolverRutas from "../Connection/helpers/resolverRutas.js";



const Rutas ={
    // "/":login,
    "/registrarusuario":RegisterUser



}


const App = async () =>{

    const header = document.querySelector("header")
    const main = document.querySelector("main")
    const footer = document.querySelector("footer")

    header.innerHTML=Nav();

    let ruta = await resolverRutas(getHash());
    let pagina = await Rutas[ruta] ? Rutas[ruta] : Error404; 

    main.innerHTML = await pagina();
}
export {App}