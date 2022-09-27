import Router from "./libs/router";
import contenido from "./components/contenido";
import inicio from "./components/inicio";
import actividades from "./components/actividades";
import listaLectura from "./components/listaLectura";


window.onload = function() {
    let routes = [
        contenido, inicio, actividades, listaLectura
    ];

    new Router("app", routes);
}