import Route from '../libs/route';

class Inicio extends Route {
    constructor() {
        super("inicio", {
            htmlName: "/views/inicio.html",
            default: true
        });
        this.onMountCb = this.whenMounted;
    }

    async whenMounted() {}
}

const inicio = new Inicio();
export default inicio;