console.log("Corriendo App")

import {App} from "./routes/App.js"


window.addEventListener("load", App)
window.addEventListener("hashchange", App)

