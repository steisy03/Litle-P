import Route from '../libs/route';
import { circulatorio } from '../template/actividadesRelacionadas';

class ActividadesRelacionadas extends Route {
    constructor() {
        super("contenido", {
            htmlName: "/views/contenido.html",
            default: false
        });
        this.onMountCb = this.whenMounted;
    }
    async whenMounted() {}

}

const actividadesRelacionadas = new ActividadesRelacionadas();
export default actividadesRelacionadas;