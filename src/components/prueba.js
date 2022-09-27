import Route from '../libs/route';
import {seleccionActividad, seleccionPregunta, seleccionRespuesta} from '../template/tmpActividades';
//
const vofSistemaCirculatorio = require('../data/vof/vofSistemaCirculatorio.json');
const seleccionSistemaCirculatorio = require('../data/seleccion/seleccionSistemaCirculatorio.json');
//
let contador = 0, totalPreguntas = 0;
let actividad, pregunta, respuestas;
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
        this.llenarActividadSeleccion( seleccionSistemaCirculatorio, seleccionActividad, seleccionPregunta, seleccionRespuesta );

    }

    /*
        ? data: informaciones de la actividad
        ? template: formatp base de la actividad (html)
        ? qTemplate (question template): formato para la pregunta (html)
        ? aTemplate (answer template): formato para las respuestas (html)
    */
    async llenarActividadSeleccion( data, template, qTemplate, aTemplate ){
        actividad.innerHTML = template
            .replace( "{{ID}}", data.id )
            .replace( "{{DESCRIPTION}}", data.description );
        pregunta = document.getElementById('pregunta');
        this.llenarPregunta(data, qTemplate, aTemplate);
    }

    /*
        ? data: informaciones de la actividad
        ? qTemplate (question template): formato para la pregunta (html)
        ? aTemplate (answer template): formato para las respuestas (html)
    */
    async llenarPregunta( data, qTemplate, aTemplate ){
        let question = data.questions[contador];
        let sp = '';
        pregunta.innerHTML = qTemplate.replace( "{{QUESTION}}", question.description );
        //
        respuestas = document.getElementById('respuestas');
        question.options.forEach(element =>{
            sp += aTemplate.replace( "{{ANSWERDES}}", element.description );
        })
        respuestas.innerHTML = sp;
    }
}

const prueba = new Prueba();
export default prueba;