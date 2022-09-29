import Route from '../libs/route';
import { tablaContenido } from '../template/links';

let tablaContenidos;
class Actividades extends Route {
    constructor() {
        super("actividades", {
            htmlName: "/views/actividades.html",
            default: false
        });
        this.onMountCb = this.whenMounted;
    }

    async whenMounted() {
        //declaraciones
        tablaContenidos = document.getElementById('tablaContenidos');
        tablaContenidos.innerHTML = tablaContenido;
    }
}

const actividades = new Actividades();
export default actividades;