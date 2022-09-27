import Route from '../libs/route';
import { tablaContenido } from '../template/links';

let tablaContenidos, name;
class ListaLectura extends Route {
    constructor() {
        super("listaLectura", {
            htmlName: "/views/listaLectura.html",
            default: true
        });
        this.onMountCb = this.whenMounted;
    }

    async whenMounted() {
        tablaContenidos = document.getElementById('tablaContenidos');
        tablaContenidos.innerHTML = tablaContenido;
        name = document.getElementById('name');
        name.innerHTML = "Lista de Lectura";



    }
}

const listaLectura = new ListaLectura();
export default listaLectura;