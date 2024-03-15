import { header } from "./src/componentes/header";
import { home } from "./src/vistas/home";
import { registro } from "./src/vistas/registro";

console.log('hola');

// import { series } from "./src/datos/series";

// console.log(series);

document.querySelector('header').innerHTML = header.template;
header.script()

document.querySelector('main').innerHTML = registro.template;
registro.script()