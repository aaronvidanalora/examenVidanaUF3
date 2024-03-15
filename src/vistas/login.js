import { users } from "../componentes/users";
import { home } from "./home";

export const login = {
    template : //html
    `
    <div>
    <h2>Iniciar Sesión</h2>
    <form id="loginForm">
      <div class="form-group">
        <label for="email">Usuario:</label>
        <input type="text" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="pass">Contraseña:</label>
        <input type="password" class="form-control" id="pass" v-model="password" required>
      </div>
      <button type="submit" class=" mt-2 btn btn-primary">Iniciar Sesión</button>
    </form>
  </div>
    `,
    script:()=>{
        document.querySelector('#loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.querySelector('#email').value.trim();
            const password = document.querySelector('#pass').value.trim();
            const correoElectronico = document.querySelector('#email').value
            // Simular verificación en la base de datos
            let usuarioEncontrado = users.find(usuario => usuario.email === email && usuario.password === password);
          
            if (usuarioEncontrado) {
                // Inicio de sesión exitoso
                alert('Inicio de sesión exitoso');
             
                document.querySelector('main').innerHTML = home.template
                home.script()
          
               
            } else {
                // Fallo en el inicio de sesión
                alert('Error en el inicio de sesión. Verifica tus credenciales.');
            }
        });
    }
}
