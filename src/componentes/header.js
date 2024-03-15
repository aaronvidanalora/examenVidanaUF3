import { login } from "../vistas/login";
import { registro } from "../vistas/registro";

export const header  = {
    template: //html
    `
    <div class="container-fluid">
    <span class="navbar-brand mb-0">EXAMEN AARON  (Alumnno: Aarón Vidaña lora)</span>
    <form  class="d-flex">
      <input id="email" class="form-control me-2" placeholder="email@email.com">
      <button id="login" class="btn btn-outline-success">Login</button>
      <button id="registro"  class="btn btn-link">Regístrate</button>
    </form>
    
  </div>
    `,
    script : () =>{
        document.querySelector('#login').addEventListener('click',(e)=>{
            e.preventDefault()
            document.querySelector('main').innerHTML = login.template
            login.script()
        });

        document.querySelector('#registro').addEventListener('click',(e)=>{
            e.preventDefault()
            document.querySelector('main').innerHTML = registro.template
            registro.script()
        });
    }
}