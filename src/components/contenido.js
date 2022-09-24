import Route from '../libs/route';

class Contenido extends Route {
    constructor() {
        super("contenido", {
            htmlName: "/views/contenido.html",
            default: false
        });
        this.onMountCb = this.whenMounted;
    }

    async whenMounted() {}
}

const contenido = new Contenido();
export default contenido;