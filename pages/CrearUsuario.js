
const CrearUsuario = ()=>{

    const vistaCrearUsuario =
     ` 
     <form style=" width: 50vw; margin-left : 25vw;">
        <!-- Creación de usuarios -->
        <p>
          <fieldset style="width: 880px;">
          <br/>
          <legend> Datos Personales</legend>
          <br/>

          <!-- Clase de usuarios -->
          <h5><label for="nombreRol">Tipo de rol:</label>
          <select name="rol" id="nombreRol">
              <option value="0"> Elige:</option>
              <option value="2"> Administrador</option>
              <option value="1"> Recepción</option>
              <option value="2"> Médico</option>


                </select>
                <br/> <br/><br/>


                <label for="camponombre">Nombres:</label>
                <input type="text" name="nombre" id="camponombre" placeholder="Primer y Segundo Nombre" required style="width: 300px;" autofocus required>

        &nbsp; &nbsp; &nbsp;&nbsp;

                <label for="campoapellido">Apellidos:</label>
                <input type="text" name="apellido" id="campoapellido" placeholder="Primer y Segundo Apellido" required style="width: 300px;" required>
                </p>


            <br/>

                <!-- Selección tipo de identificación -->

                <label>Tipo de identificación:</label>
                        <select>
                        <option value="0"> Elige:</option>
                        <option>Cédula (CC)</option>
                        <option>Cédula de estranjería (CE)</option>
                        </select>

                <!-- Número de identificación -->
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                <label for="numeroid">Número de identificación: </label>
                <input type="number" name="numeroid" id="numeroid" placeholder="Número de identificación" required style="width: 200px;" required>


            <br/> <br/>

                <!-- Fecha de nacimiento-->
                <p>
                <label for="nacimientous">Fecha de nacimiento:</label>
                <input type="date" name="fecha" id="nacimientous">
                </p>

        <br/>

                <!-- Correo electrónico-->


            <label for="emailus">Correo electrónico:</label>
            <input type="email" name="email" id="emailus" placeholder="email@dominio.com" autofocus required style="width: 300px;" required>

        <br/>      <br/>

                <!-- Dirección de Usuario-->
        <label for="direccionus">Dirección:</label>
        <input type="text" name="direccion" id="direccionus" placeholder="Dirección" required style="width: 350px;" required>


        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;

                <!-- Celular de Usuario-->

        <label for="celularus">Número de celular:</label>
        <input type="tel" name="celular" id="celularus" placeholder="Celular" required style="width: 250px;" required>

        <p><br/>
        <hr>
        </p>
        </h5>

                <!-- Asignación de usuario y contraseña-->

        <p><h2>Asignación usuario y contraseña:</h2></p>


        <h5><label for="username">Usuario:</label>
        <input type="text" name="usuario" id="username" placeholder="Nuevo nombre de usuario" required style="width: 350px;" required>


                <!-- Asignación de  contraseña -->

                    <br/> <br/><p>
                        <label for="password">Contraseña:</label>
                        <input type="password" name="psw" id="password" placeholder="Nueva contraseña" required>
                    </p>
        <br/>
        </h5>

            <!-- Botón para grabar info -->
                    <p>
                        <input type="submit" value="Crear usuario">
                        <input type="reset" value="Borrar">
                    </p>

        </fieldset>

    </form>
    ` 
 
    return vistaCrearUsuario
}

export {CrearUsuario}