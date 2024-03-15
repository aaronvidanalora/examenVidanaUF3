import { fitxes } from "../componentes/fitxes";

export const home = {
    template://html 
    ` 
    <div class="row">
    <div class="col-12">
        <p class="text-end">Bienvenido <span id="nombreUsuario"></span></p>
        <h1 class="text-center mt-3">Series famosas de todos los tiempos</h1>
        <p class="text-center fs-4 p-3 bg-light border">Haz clic sobre cualquier ficha para mostrar toda la información en el panel derecho</p>
    </div>
    <div class="col-6" id="cartas">
        <div class="row" id="cartasSeries">
        </div>
    </div>
    <!-- ficha ampliada -->
    <div class="col-6">
        <div class="card shadow mt-2">
            <img id="panelDerechoImg" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 id="panelDerechoTitulo">Stranger Thinks</h3>
                <hr />
                <p><strong>Año: </strong><span id="panelDerechoAno">2017</span></p>
                <p>
                    <strong>Descripción: </strong>
                    <span id="panelDerechoDescripcion">
                        Un grupo de niños se enfrenta a fenómenos sobrenaturales en un pequeño pueblo de los años 80.
                    </span>
                </p>
            </div>
            <button id="btnBorrarSerie" class="btn btn-danger">Borrar Serie</button>
        </div>
    </div>
</div>

    `,
    script: () => {

        fitxes.script()
        
    }
    
    
};
