import { sistemaDigestivo, sistemaRespiratorio, sistemaCirculatorio, sistemaOseo, sistemaNervioso, sistemaExcretor } from './data/contenido';
import { tablaContenido, tablaContenidoDigestivo, tablaContenidoCirculatorio, tablaContenidoNervioso, tablaContenidoOseo, tablaContenidoExcretor, tablaContenidoRespiratorio } from './template/links';
import { actividadRelacionadasCirculatorio, actividadRelacionadaNervioso, actividadesRelacionadasDigestivo, actividadesRelacionadasRespiratorio, actividadesRelacionadasOseo, actividadesRelacionadasExcretor } from './template/actividadesRelacionadas';
let contenidos, tablaContenidos, name, actividadesRelacionadas;


window.onload = function()  {
        //DECLARAR
        contenidos = document.getElementById('contenidos');
        tablaContenidos = document.getElementById('tablaContenidos');
        name = document.getElementById('name');
        actividadesRelacionadas = document.getElementById('actividadesRelacionadas');
        //

        tablaContenidos.innerHTML = tablaContenido;
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const option = urlParams.get('sistema');

        //
        if (option == 'sistema-digestivo') {
            contenidos.innerHTML = sistemaDigestivo;
            tablaContenidos.innerHTML = tablaContenidoDigestivo;
            actividadesRelacionadas.innerHTML = actividadesRelacionadasDigestivo;

        } else if (option == 'sistema-respiratorio') {
            contenidos.innerHTML = sistemaRespiratorio;
            tablaContenidos.innerHTML = tablaContenidoRespiratorio;
            actividadesRelacionadas.innerHTML = actividadesRelacionadasRespiratorio;
        } else if (option == 'sistema-nervioso') {
            contenidos.innerHTML = sistemaNervioso;
            tablaContenidos.innerHTML = tablaContenidoNervioso;
            actividadesRelacionadas.innerHTML = actividadRelacionadaNervioso;
        } else if (option == 'sistema-oseo') {
            contenidos.innerHTML = sistemaOseo;
            tablaContenidos.innerHTML = tablaContenidoOseo;
            actividadesRelacionadas.innerHTML = actividadesRelacionadasOseo;
        } else if (option == 'sistema-circulatorio') {
            contenidos.innerHTML = sistemaCirculatorio;
            tablaContenidos.innerHTML = tablaContenidoCirculatorio;
            actividadesRelacionadas.innerHTML = actividadRelacionadasCirculatorio;
        } else if (option == 'sistema-excretor') {
            contenidos.innerHTML = sistemaExcretor;
            tablaContenidos.innerHTML = tablaContenidoExcretor;
            actividadesRelacionadas.innerHTML = actividadesRelacionadasExcretor;
        } else {
            window.location = '/';
        }
    }
