import Route from '../libs/route';
import { tablaContenido } from '../template/links';
let tablaContenidos, inicioItem;
class Inicio extends Route {
    constructor() {
        super("inicio", {
            htmlName: "/views/inicio.html",
            default: true
        });
        this.onMountCb = this.whenMounted;
    }

    async whenMounted() {
        tablaContenidos = document.getElementById('contenidos');
        tablaContenidos.innerHTML = tablaContenido;

        inicioItem = document.getElementById('inicioItem');
        inicioItem.style.display = 'none';


    }
}

const inicio = new Inicio();
export default inicio;