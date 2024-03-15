import { series } from "../datos/series";

export const fitxes = {
    template: //html
    `
    `,
    
    script: () => {
        
        const cartasSeries = document.querySelector('#cartasSeries');
        const panelDerechoImg = document.querySelector('#panelDerechoImg');
        const panelDerechoTitulo = document.querySelector('#panelDerechoTitulo');
        const panelDerechoAno = document.querySelector('#panelDerechoAno');
        const panelDerechoDescripcion = document.querySelector('#panelDerechoDescripcion');
        const btnBorrarSerie = document.querySelector('#btnBorrarSerie');
    
        // Función para eliminar una carta
        function eliminarCarta(serieId) {
            const borrarCard = document.querySelector(`.card[data-id="${serieId}"]`);
            if (borrarCard) {
                borrarCard.parentElement.remove();
            }
        }
    
        // recorro la bd y creo las cartas
        series.forEach(serie => {
            // Crear elementos de la carta
            const cardColumn = document.createElement('div');
            cardColumn.classList.add('col-4');
    
            const card = document.createElement('div');
            card.classList.add('card', 'mt-2');
    
            const img = document.createElement('img');
            img.src = serie.imagen_url 
            img.classList.add('card-img-top');
    
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
    
            const title = document.createElement('h5');
            title.classList.add('card-title', 'text-center');
            title.textContent = serie.nombre;
    
            // Añadir el data id para identificar
            card.dataset.id = serie.nombre; 
    
            // Construir la carta
            cardBody.appendChild(title);
            card.appendChild(img);
            card.appendChild(cardBody);
            cardColumn.appendChild(card);
            cartasSeries.appendChild(cardColumn);
        });
    
       
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', () => {
                // Obtener el data-id de la que hago click
                const serieId = card.dataset.id;
    
                // Encontrar la serie con ese id
                const serieSeleccionada = series.find(serie => serie.nombre === serieId);
    
                // actualizo el panel derecho con esa serie
                panelDerechoImg.src = serieSeleccionada.imagen_url;
                panelDerechoTitulo.textContent = serieSeleccionada.nombre;
                panelDerechoAno.textContent = serieSeleccionada.año;
                panelDerechoDescripcion.textContent = serieSeleccionada.descripcion;
            });
        });

        // borrar serie
        btnBorrarSerie.addEventListener('click', () => {
            // Obtener el data-id de la serie seleccionada en el panel derecho
            const serieId = panelDerechoTitulo.textContent;
    
            // Eliminar la carta correspondiente
            eliminarCarta(serieId);

            // Limpiar el panel derecho
            panelDerechoImg.src = 'https://upload.wikimedia.org/wikipedia/en/6/6e/Stranger_Things_characters.png';
            panelDerechoTitulo.textContent = '';
            panelDerechoAno.textContent = '';
            panelDerechoDescripcion.textContent = '';
        });
    }
}
