import {seleccionActividad, seleccionPregunta, seleccionRespuesta, finalizarActividad} from './template/tmpActividades';
//
const vofCirculatorio = require('./data/vof/vofSistemaCirculatorio.json');
const vofDisgestivo = require('./data/vof/vofSistemaDigestivo.json');
const vofExcretor = require('./data/vof/vofSistemaExcretor.json');
const vofNervioso = require('./data/vof/vofSistemaNervioso.json');
const vofOseo = require('./data/vof/vofSistemaOseo.json');
const vofRespiratorio = require('./data/vof/vofSistemaRespiratorio.json');
const seleccionCirculatorio = require('./data/seleccion/seleccionSistemaCirculatorio.json');
const seleccionDisgestivo = require('./data/seleccion/seleccionSistemaDigestivo.json');
const seleccionNervioso = require('./data/seleccion/seleccionSistemaNervioso.json');
const seleccionOrganos = require('./data/seleccion/seleccionMultipleOrganos.json');

//
let tmpAlert = `<div id="alerta" class="alert alert-warning d-flex align-items-center" role="alert">
<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
<div>
  Debe seleccionar una opcion antes de continuar.
</div>
</div>`;

let tmpImegen = `<img src="" class="card-img-top" alt="">`;
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
    puntuacion,
    puntuacionObtenida = 0,
    volver,
    data, //? data: informaciones de la actividad
    template, //? template: formatp base de la actividad (html)
    qTemplate, //? qTemplate (question template): formato para la pregunta (html)
    aTemplate; //? aTemplate (answer template): formato para las respuestas (html)

    window.onload = function() {
        actividad = document.getElementById('actividad');
        //
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const option = urlParams.get('actividad');
        //
        if( option == 'vofCirculatorio' ){
            setVariablesSeleccion( vofCirculatorio, seleccionActividad, seleccionPregunta, seleccionRespuesta );
            volver = 'vofCirculatorio';
        }else if( option == 'vofDisgestivo' ){
            setVariablesSeleccion( vofDisgestivo, seleccionActividad, seleccionPregunta, seleccionRespuesta );
            volver = 'vofDisgestivo';
        }else if( option == 'vofExcretor' ){
            setVariablesSeleccion( vofExcretor, seleccionActividad, seleccionPregunta, seleccionRespuesta );
            volver = 'vofExcretor';
        }else if( option == 'vofNervioso' ){
            setVariablesSeleccion( vofNervioso, seleccionActividad, seleccionPregunta, seleccionRespuesta );
            volver = 'vofNervioso';
        }else if( option == 'vofOseo' ){
            setVariablesSeleccion( vofOseo, seleccionActividad, seleccionPregunta, seleccionRespuesta );
            volver = 'vofOseo';
        }else if( option == 'vofRespiratorio' ){
            setVariablesSeleccion( vofRespiratorio, seleccionActividad, seleccionPregunta, seleccionRespuesta );
            volver = 'vofRespiratorio';
        }else if( option == 'seleccionDisgestivo' ){
            setVariablesSeleccion( seleccionDisgestivo, seleccionActividad, seleccionPregunta, seleccionRespuesta );
            volver = 'seleccionDisgestivo';
        }else if( option == 'seleccionNervioso' ){
            setVariablesSeleccion( seleccionNervioso, seleccionActividad, seleccionPregunta, seleccionRespuesta );
            volver = 'seleccionNervioso';
        }else if( option == 'seleccionCirculatorio' ){
            setVariablesSeleccion( seleccionCirculatorio, seleccionActividad, seleccionPregunta, seleccionRespuesta );
            volver = 'seleccionCirculatorio';
        }else if(option == 'seleccionOrganos'){
            setVariablesSeleccion(seleccionOrganos,seleccionActividad, seleccionPregunta, seleccionRespuesta );
            volver = 'seleccionOrganos';
        }
        //
        llenarActividadSeleccion();
    }

    function llenarActividadSeleccion(){
        actividad.innerHTML = template
            .replace( "{{ID}}", data.id )
            .replace( "{{DESCRIPTION}}", data.description );
        pregunta = document.getElementById('pregunta');
        document.getElementById("volverAtras").addEventListener('click', () => {
            window.location = 'actividades.html';
        })
        llenarPregunta();
    }

    function llenarRespuesta(e){
        let ueObject = e.target;
        let value = ueObject.getAttribute("value");
        respuestaSeleccionadas = respuestaSeleccionadas.filter(e=> e.question != contador);
        respuestaSeleccionadas.push({"question":contador, "value":value});
        let alertNode = document.getElementById('alerta');
        let alert = new bootstrap.Alert(alertNode)
        alert.close();
    }

    function llenarPregunta(){
        let question = data.questions[contador];
        totalPreguntas = data.questions.length - 1;
        let sp = '';
        //* Llenando pregunta
        pregunta.innerHTML = qTemplate
            .replace( "{{QUESTION}}", question.description )
            .replace( "{{ANTERIOR}}", question.id - 1 )
            .replace( "{{SIGUIENTE}}", question.id + 1 )
            .replace("{{IMAGEN}}", question.imagen);
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
        anterior.addEventListener("click", ()=> {
            contador--;
            let pregunta = data.questions[contador].id;
            let found = respuestaSeleccionadas.find(element => element.question == pregunta);
            llenarPregunta();
            document.querySelector("input[name=actividadUno][value='"+found.value+"']").checked = true;	
        });
        siguiente.addEventListener("click", ()=> {
            if( validarRespuestaSeleccion() ){
                contador++;
                let pregunta = data.questions[contador].id;
                let found = respuestaSeleccionadas.find(element => element.question == pregunta);
                llenarPregunta();
                let element = document.querySelector("input[name=actividadUno][value='"+found?.value+"']");
                element != null ? element.checked = true :null 
            } else {
                document.getElementById("tmpAlert").innerHTML = tmpAlert;
            }
        });
        finalizar.addEventListener("click", () => finalizarActividadSeleccion())
        //
        //* Llenado respuestas
        respuestas = document.getElementById('respuestas');
        question.options.forEach(element =>{
            sp += aTemplate
                .replace( "{{ID}}", element.id )
                .replace( "{{IDI}}", element.id )
                .replace( "{{ANSWERDES}}", element.description )
                .replace("{{IMAGENRESPUESTA}}", element.imagen == '' ? '' : `<img src="${element.imagen}" class="card-img-top" alt="">`);
        })
        respuestas.innerHTML = sp;
        let listRespuestas = document.getElementsByClassName("ra");
        console.log(listRespuestas);
        for (let i = 0; i < listRespuestas.length; i++) {
            listRespuestas[i].addEventListener("click", llenarRespuesta);
        }
    }

    function siguiente(){
        

    }

    function anterior(){
        
    }
   
    function setVariablesSeleccion( activity, templateActivity, templateQuestion, templateAnswer ){
        data = activity;
        template = templateActivity;
        qTemplate = templateQuestion;
        aTemplate = templateAnswer;
    }

    function validarRespuestaSeleccion(){
        let res = document.querySelector('input[name="actividadUno"]:checked')?.getAttribute("data-id");
        if(res == undefined ){
            return false;
        }
        return true;
    }

    function finalizarActividadSeleccion(){
        if( validarRespuestaSeleccion() ){
            console.log("finalizar");
            for( let i=0 ; i< respuestaSeleccionadas.length; i++ ){
                respuestaSeleccionadas.forEach(element =>{
                    if((data.questions[i].id == element.question) && (data.questions[i].answer == element.value)){
                        puntuacionObtenida++;
                    }
                });
            }
            let resultado  = puntuacionObtenida/data.score*100;
            let mensaje = 'nice';
            if( resultado > 90 ) mensaje = '¡Muy Bien!';
            if( resultado < 90 && resultado > 70 ) mensaje = '¡Bien!';
            if( resultado < 70 ) mensaje = '¡Sigue Intentando!'
            actividad.innerHTML = finalizarActividad
                .replace( "{{PUNTUACION}}", resultado )
                .replace( "{{MENSAJE}}", mensaje);
            document.getElementById("realizarNuevo").addEventListener('click', () => {
                window.location = 'actividad.html?actividad=' + volver;
            });
            document.getElementById("volerInicio").addEventListener('click', () => {
                window.location = 'actividades.html';
            })
        }
    }