import Route from '../libs/route';
import { sistemaDigestivo, sistemaRespiratorio, sistemaCirculatorio, sistemaOseo, sistemaNervioso, sistemaExcretor } from '../data/contenido';
import { tablaContenido } from '../template/links';

let contenidos, tablaContenidos, name;

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
        //

        tablaContenidos.innerHTML = tablaContenido;
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const option = urlParams.get('sistema');

        //
        if (option == 'sistema-digestivo') {
            contenidos.innerHTML = sistemaDigestivo;
            name.innerHTML = "Digestivo";

        } else if (option == 'sistema-respiratorio') {
            contenidos.innerHTML = sistemaRespiratorio;
            name.innerHTML = "Respiratorio";
        } else if (option == 'sistema-nervioso') {
            contenidos.innerHTML = sistemaNervioso;
            name.innerHTML = "Nervioso";
        } else if (option == 'sistema-oseo') {
            contenidos.innerHTML = sistemaOseo;
            name.innerHTML = "Óseo";
        } else if (option == 'sistema-circulatorio') {
            contenidos.innerHTML = sistemaCirculatorio;
            name.innerHTML = "Circulatorio";
        } else if (option == 'sistema-excretor') {
            contenidos.innerHTML = sistemaExcretor;
            name.innerHTML = "Excretor";
        } else {
            window.location = '/';
        }
    }
}

const contenido = new Contenido();
export default contenido;