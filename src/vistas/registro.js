import { users } from "../componentes/users";
import { login } from "./login";

export const registro = {
    template : //html
    `
    <div>
    <h2>Registro</h2>
    <form id="registroForm">
      <div class="form-group">
        <label for="email">Usuario:</label>
        <input type="text" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="pass">Contraseña:</label>
        <input type="password" class="form-control" id="pass" v-model="pass" required>
      </div>
      <button type="submit" id="enviar" class=" mt-2 btn btn-success">Registro</button>
    </form>
  </div>
    `,
    script: () => {
        document.querySelector('#registroForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.querySelector('#email').value.trim();
            const password = document.querySelector('#pass').value.trim();
        
            const objeto = {
                email: email,
                password: password
            };
    
            
            let comprovarEmail = false;
            users.forEach(user => {
                if (user.email === email) {
                    comprovarEmail = true;
                }
            });
    
            if (comprovarEmail) {
                alert('Este correo ya ha sido usado');
            } else {
               //si el email no ha sido usado se hace el push a la bd
                users.push(objeto);
                const texto = JSON.stringify(users);
        
                localStorage.setItem('registroLocal', texto);
                console.log(users);
                //Comprobar si se ha guardado en la bd
                if (!users) {
                    alert('No se guardó correctamente en la base de datos');
                } else {
                    alert('Tu usuario ha sido registrado correctamente');
                    //si se guarda vamos directos a iniciar sesión 
                    document.querySelector('main').innerHTML = login.template;
                    login.script();
                }
            }
        });
    }
}
