import Route from '../libs/route';
import {seleccionActividad, seleccionPregunta, seleccionRespuesta} from '../template/tmpActividades';
//
const vofSistemaCirculatorio = require('../data/vof/vofSistemaCirculatorio.json');
const seleccionSistemaCirculatorio = require('../data/seleccion/seleccionSistemaCirculatorio.json');
//
let contador = 0, 
    totalPreguntas = 0,
    actividad, 
    pregunta, 
    respuestas,
    alertaSeleccion,
    myAlert ,
    bsAlert ,
    respuestaSeleccionadas = [],
    data, //? data: informaciones de la actividad
    template, //? template: formatp base de la actividad (html)
    qTemplate, //? qTemplate (question template): formato para la pregunta (html)
    aTemplate; //? aTemplate (answer template): formato para las respuestas (html)
//
class Prueba extends Route {
    constructor() {
        super("prueba", {
            htmlName: "/views/prueba.html",
            default: false
        });
        this.onMountCb = this.whenMounted;
    }

    async whenMounted() {
        actividad = document.getElementById('actividad');
        //
        await this.setVariables( seleccionSistemaCirculatorio, seleccionActividad, seleccionPregunta, seleccionRespuesta );
        await this.llenarActividadSeleccion();
        
    }

    async llenarActividadSeleccion(){
        actividad.innerHTML = template
            .replace( "{{ID}}", data.id )
            .replace( "{{DESCRIPTION}}", data.description );
        pregunta = document.getElementById('pregunta');
        myAlert = document.querySelector('.alert');
        bsAlert = new bootstrap.Alert(myAlert);
        bsAlert.close();
        this.llenarPregunta(data, qTemplate, aTemplate);
    }

    async llenarPregunta(){
        let question = data.questions[contador];
        totalPreguntas = data.questions.length - 1;
        let sp = '';
        //* Llenando pregunta
        pregunta.innerHTML = qTemplate
            .replace( "{{QUESTION}}", question.description )
            .replace( "{{ANTERIOR}}", question.id - 1 )
            .replace( "{{SIGUIENTE}}", question.id + 1 );
        //
        let anterior = document.getElementById('anterior');
        let siguiente = document.getElementById('siguiente');
        let finalizar = document.getElementById('finalizar');
        contador == 0 
            ? anterior.setAttribute( "hidden", "hidden" )
            : anterior.removeAttribute( "hidden" );
        contador == totalPreguntas
            ? siguiente.setAttribute( "hidden", "hidden" )
            : siguiente.removeAttribute( "hidden" );
        contador == totalPreguntas
            ? finalizar.removeAttribute( "hidden" )
            : finalizar.setAttribute( "hidden", "hidden" );
        anterior.addEventListener("click", ()=> this.anterior());
        siguiente.addEventListener("click", ()=> this.siguiente());
        
        //
        //* Llenado respuestas
        respuestas = document.getElementById('respuestas');
        question.options.forEach(element =>{
            sp += aTemplate
                .replace( "{{ID}}", element.id )
                .replace( "{{IDI}}", element.id )
                .replace( "{{ANSWERDES}}", element.description );
        })
        respuestas.innerHTML = sp;
        document.querySelector("input[name=actividadUno][value='1']").checked = true;	
        console.log(document.querySelector("input[name=actividadUno][value='1']"));
    }

    async siguiente(){
        if( this.validarRespuestaSeleccion() ){
            contador++;
            this.llenarPregunta();
        }

    }

    async anterior(){
        contador--;
        this.llenarPregunta();
    }
   
    async setVariables( activity, templateActivity, templateQuestion, templateAnswer ){
        data = activity;
        template = templateActivity;
        qTemplate = templateQuestion;
        aTemplate = templateAnswer;
    }

    //TODO: 
    //TODO: llenar datos del avance y demas en el locaStorage
    validarRespuestaSeleccion(){
        let res = document.querySelector('input[name="actividadUno"]:checked')?.getAttribute("data-id");
        if(res == undefined ){
            console.log("prueba")
            return false;
        }
        return true;
    }

    llenarRespuesta(  ){

    }

    async finalizarActividadSeleccion(){

    }
}

const prueba = new Prueba();
export default prueba;