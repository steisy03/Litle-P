import Router from "./libs/router";
import contenido from "./components/contenido";
import inicio from "./components/inicio";

window.onload = function() {
    let routes = [
        contenido, inicio
    ];

    new Router("app", routes);
}