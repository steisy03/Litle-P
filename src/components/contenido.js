import Route from '../libs/route';
import {sistemaDigestivo} from '../data/contenido';

let contenidos;
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
        contenidos = document.getElementById( 'contenidos' );
        //
        const url = window.location.search;
        const urlParams = new URLSearchParams( url );
        const option = urlParams.get( 'sistema' );
        console.log(option);
        //
        if( option == 'sistema-digestivo' ){
            contenidos.innerHTML = sistemaDigestivo;
        } else if ( option == 'sistema-respiratorio' ){

        }else{
            window.location = '/';
        }
    }
}

const contenido = new Contenido();
export default contenido;