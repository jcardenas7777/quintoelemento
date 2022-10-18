
const loginAdmin = ()=>{

    const vistaLogin = 

    ` 
   <div class="login">
    <br/><br/>

            <fieldset style="width: 400px;">

        <br/>

        <legend class="legend">   <h2>  Acceso de administradores:   </h2></legend>

        <p>


        <!-- Etiqueta inicio de formulario-->

        <form class="form">

        <!-- Asignación de usuario y contraseña-->
        <!-- Solo puede existir un id para cualquier etiqueta  /  El for comunica el id con el label, por eso debe tener el mismo nombre del id-->
        <p>
            <label for="usuario_admin">Usuario:</label>
            <input type="text" name="usuario" id="usuario_admin" placeholder="Ingresa tu usuario" required style="width: 250px;"  required>

        <br/><br/>

        <!-- Asignación de  contraseña -->

            <label for="password_admin">Contraseña:</label>
            <input type="password" name="psw" id="password_admin"  placeholder="Ingresa tu contraseña" required>


        </p><br/>

        <!-- Botón para grabar info -->

        <p>

            <input type="submit" value="Acceso">
            <input type="reset" value="Borrar">

        </p>

        <!-- Etiqueta para cierre de formulario -->
            </form>

        </p>
    </div>     

    
    
    
    
    `
    return vistaLogin
}


export {loginAdmin}