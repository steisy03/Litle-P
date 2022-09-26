import Route from '../libs/route';
import { sistemaDigestivo } from '../data/contenido';
import { tablaContenido } from '../template/links';

let contenidos, tablaContenidos;

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
        //

        tablaContenidos.innerHTML = tablaContenido;
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const option = urlParams.get('sistema');

        //
        if (option == 'sistema-digestivo') {
            contenidos.innerHTML = sistemaDigestivo;
        } else if (option == 'sistema-respiratorio') {

        } else {
            window.location = '/';
        }
    }
}

const contenido = new Contenido();
export default contenido;