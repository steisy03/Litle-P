import {seleccionActividad, seleccionPregunta, seleccionRespuesta, finalizarActividad} from './template/tmpActividades';
//
const vof = require('./data/vof/vofSistemaCirculatorio.json');
const seleccionSistemaCirculatorio = require('./data/seleccion/seleccionSistemaCirculatorio.json');
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
    data, //? data: informaciones de la actividad
    template, //? template: formatp base de la actividad (html)
    qTemplate, //? qTemplate (question template): formato para la pregunta (html)
    aTemplate; //? aTemplate (answer template): formato para las respuestas (html)
//


    window.onload = function() {
        actividad = document.getElementById('actividad');
        //
        setVariablesSeleccion( vof, seleccionActividad, seleccionPregunta, seleccionRespuesta );
        llenarActividadSeleccion();
    }

    function llenarActividadSeleccion(){
        actividad.innerHTML = template
            .replace( "{{ID}}", data.id )
            .replace( "{{DESCRIPTION}}", data.description );
        pregunta = document.getElementById('pregunta');
        myAlert = document.querySelector('.alert');
        bsAlert = new bootstrap.Alert(myAlert);
        bsAlert.close();
        llenarPregunta();
    }

    function llenarRespuesta(e){
        let ueObject = e.target;
        let value = ueObject.getAttribute("value");
        respuestaSeleccionadas = respuestaSeleccionadas.filter(e=> e.question != contador);
        respuestaSeleccionadas.push({"question":contador, "value":value});
        console.log(respuestaSeleccionadas);
    }

    function llenarPregunta(){
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
                .replace( "{{ANSWERDES}}", element.description );
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
            if( resultado < 90 && puntuacion > 70 ) mensaje = '¡Bien!';
            if( resultado < 70 ) mensaje = '¡Sigue Intentando!'
            actividad.innerHTML = finalizarActividad
                .replace( "{{PUNTUACION}}", resultado )
                .replace( "{{MENSAJE}}", mensaje);
            console.log(resultado);
        }
    }
