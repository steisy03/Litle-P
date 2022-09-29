import Route from '../libs/route';
import { tablaContenido } from '../template/links';
import {urlExt, devMode} from '../service/Env';

let tablaContenidos;
class Actividades extends Route {
    constructor() {
        let html = '';
        if(!devMode) {
            html = `/${urlExt}/views/actividades.html`;
        } else{
            "/views/actividades.html";
        }
        super("actividades", {
            htmlName: html,
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