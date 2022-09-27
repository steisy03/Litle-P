import Router from "./libs/router";
import contenido from "./components/contenido";
import inicio from "./components/inicio";
import actividades from "./components/actividades";
import listaLectura from "./components/listaLectura";
import prueba from "./components/prueba";


window.onload = function() {
    let routes = [
        contenido, inicio, actividades, listaLectura, prueba
    ];

    new Router("app", routes);
}