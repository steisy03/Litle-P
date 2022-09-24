import Router from "./libs/router";
import contenido from "./template/contenitos";

window.onload = function ()  {
   let routes = [
      contenido
   ];

   new Router("app", routes);
}