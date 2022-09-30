
import { tablaContenido } from './template/links';

let tablaContenidos, name;

window.onload = function() {
    //DECLARAR
    tablaContenidos = document.getElementById('tablaContenidos');
    tablaContenidos.innerHTML = tablaContenido;
    name = document.getElementById('name');
    name.innerHTML = "Lista de Lectura";
}


