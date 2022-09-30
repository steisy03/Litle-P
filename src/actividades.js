import { tablaContenido } from './template/links';
let tablaContenidos;


window.onload = function() {
    //DECLARAR
    tablaContenidos = document.getElementById('contenidos');
    //
    tablaContenidos.innerHTML = tablaContenido;
}