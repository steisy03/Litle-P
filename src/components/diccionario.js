import Route from '../libs/route';
import { tablaContenido } from '../template/links';

let tablaContenidos, name;
class Diccionario extends Route {
    constructor() {
        super("diccionario", {
            htmlName: "/views/diccionario.html",
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

const diccionario = new Diccionario();
export default diccionario;