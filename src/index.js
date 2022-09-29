import Router from "./libs/router";
import contenido from "./components/contenido";
import inicio from "./components/inicio";
import actividades from "./components/actividades";
import listaLectura from "./components/listaLectura";
import prueba from "./components/prueba";
import diccionario from "./components/diccionario";


window.onload = function() {
    let routes = [
        contenido, inicio, actividades, listaLectura, prueba, diccionario
    ];

    new Router("app", routes);
}