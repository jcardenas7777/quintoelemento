import { RegisterForm } from "../components/RegisterForms.js"

const RegisterUser =()=>{

    const RegistrarUser=`
    <div class="container mt-3 mb-3">
        <div class="row justify-content-md-center">
            <div class="col col-sm-12 col-md-8 col-lg-6">
                <div class="card-body">
                    <h2 class="text-center">Registrar Usuario</h2>
                </div></div>

        </div>
    </div>
    ${RegisterForm()}
    `
    return RegistrarUser
}

export {RegisterUser}