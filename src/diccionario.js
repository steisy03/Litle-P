import { tablaContenido } from './template/links';
import {templateDiccionario} from './template/tmpDiccionario';
const definiciones = require('./data/diccionario.json');
//
let tablaContenidos, data, buscarDiccionario;

window.onload = function() {
    //DECLARAR
    tablaContenidos = document.getElementById( 'contenidos' );
    data = document.getElementById( 'listaElementos' );
    buscarDiccionario = document.getElementById( 'buscarDiccionario' );
    //EVENTOS
    buscarDiccionario.addEventListener('keyup', filtrar);
    //
    tablaContenidos.innerHTML = tablaContenido;
    llenarConceptos( definiciones );
}

function filtrar(){
    let arr = [];
    definiciones.forEach((elemento) =>{
        arr.push(elemento);
    })
    if(buscarDiccionario.value == ""){
        arr = definiciones;
    } else {
        arr = arr.filter( row => row.nombre.toLowerCase().includes(buscarDiccionario.value) ) ;
        console.log(arr);
    }
    llenarConceptos( arr);
}

function llenarConceptos( arr ){
    let sp='';
    arr.forEach((elemento) =>{
        sp += templateDiccionario
        .replace( "{{NOMBRE}}", elemento.nombre )
        .replace( "{{TIPO}}", elemento.tipo )
        .replace( "{{DESCRIPCION}}", elemento.descripcion )
        .replace( "{{IMAGEN}}", elemento.imagen );
    })
    data.innerHTML =sp;
 }


