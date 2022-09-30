import { tablaContenido } from './template/links';
import {templateDiccionario} from './template/tmpDiccionario';
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
    let sp='';
    definiciones.forEach((elemento) =>{
        sp += templateDiccionario
        .replace( "{{NOMBRE}}", elemento.nombre )
        .replace( "{{TIPO}}", elemento.tipo )
        .replace( "{{DESCRIPCION}}", elemento.descripcion )
        .replace( "{{IMAGEN}}", elemento.imagen );
    })
    data.innerHTML =sp;
 }


