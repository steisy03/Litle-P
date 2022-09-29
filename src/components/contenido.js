import Route from '../libs/route';
import { sistemaDigestivo, sistemaRespiratorio, sistemaCirculatorio, sistemaOseo, sistemaNervioso, sistemaExcretor } from '../data/contenido';
import { tablaContenido, tablaContenidoDigestivo, tablaContenidoCirculatorio, tablaContenidoNervioso, tablaContenidoOseo, tablaContenidoExcretor, tablaContenidoRespiratorio } from '../template/links';
import { actividadRelacionadasCirculatorio, actividadRelacionadaNervioso, actividadesRelacionadasDigestivo, actividadesRelacionadasRespiratorio, actividadesRelacionadasOseo, actividadesRelacionadasExcretor } from '../template/actividadesRelacionadas';
let contenidos, tablaContenidos, name, actividadesRelacionadas;

class Contenido extends Route {
    constructor() {
        super("contenido", {
            htmlName: "/views/contenido.html",
            default: false
        });
        this.onMountCb = this.whenMounted;
    }

    async whenMounted() {
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
            name.innerHTML = "Digestivo";
            tablaContenidos.innerHTML = tablaContenidoDigestivo;
            actividadesRelacionadas.innerHTML = actividadesRelacionadasDigestivo;

        } else if (option == 'sistema-respiratorio') {
            contenidos.innerHTML = sistemaRespiratorio;
            name.innerHTML = "Respiratorio";
            tablaContenidos.innerHTML = tablaContenidoRespiratorio;
            actividadesRelacionadas.innerHTML = actividadesRelacionadasRespiratorio;
        } else if (option == 'sistema-nervioso') {
            contenidos.innerHTML = sistemaNervioso;
            name.innerHTML = "Nervioso";
            tablaContenidos.innerHTML = tablaContenidoNervioso;
            actividadesRelacionadas.innerHTML = actividadRelacionadaNervioso;
        } else if (option == 'sistema-oseo') {
            contenidos.innerHTML = sistemaOseo;
            name.innerHTML = "Óseo";
            tablaContenidos.innerHTML = tablaContenidoOseo;
            actividadesRelacionadas.innerHTML = actividadesRelacionadasOseo;
        } else if (option == 'sistema-circulatorio') {
            contenidos.innerHTML = sistemaCirculatorio;
            name.innerHTML = "Circulatorio";
            tablaContenidos.innerHTML = tablaContenidoCirculatorio;
            actividadesRelacionadas.innerHTML = actividadRelacionadasCirculatorio;
        } else if (option == 'sistema-excretor') {
            contenidos.innerHTML = sistemaExcretor;
            name.innerHTML = "Excretor";
            tablaContenidos.innerHTML = tablaContenidoExcretor;
            actividadesRelacionadas.innerHTML = actividadesRelacionadasExcretor;
        } else {
            window.location = '/';
        }
    }
}

const contenido = new Contenido();
export default contenido;