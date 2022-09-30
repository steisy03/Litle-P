import { tablaContenido } from './template/links';
let tablaContenidos, inicioItem;

window.onload = function() {

    tablaContenidos = document.getElementById('contenidos');
    tablaContenidos.innerHTML = tablaContenido;

    inicioItem = document.getElementById('inicioItem');
    inicioItem.style.display = 'none';

}
