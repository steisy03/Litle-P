import { tablaContenido } from './template/links';
import {concepto} from './template/tmpDiccionario';
const definiciones = require('./data/diccionario.json');;
let tablaContenidos, template, data;


window.onload = function() {
    //DECLARAR
    tablaContenidos = document.getElementById('contenidos');
    data = document.getElementById('listaElementos');

    
    tablaContenidos.innerHTML = tablaContenido;
    llenarConceptos();
}

function llenarConceptos(){
 }


