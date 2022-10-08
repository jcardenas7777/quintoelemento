

const Error404 =()=>{

    const VistaError=`
    <!-- <div class="Fs-1 fw-bold"><h2>ERROR 404</h2></div> -->
    <div class="row justify-content-md-center">
        <div class="col col-sm-12 col-md-8 col-lg-6">
            <div class="d-flex align-items-center justify-content-center vh-50 ">
                <h1 class="display-1 fw-bold text-black"></h1>
                <h3 class="text-center">ERROR 404</h3>  
            </div>  
            <div class="d-flex align-items-center justify-content-center vh-50 ">
                <p class="text-center">No se encontro la pagina que esta buscando</p>
            </div>
         </div>           
    </div>

    `
    return VistaError
}

export {Error404}