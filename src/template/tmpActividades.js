const seleccionRespuesta = `<div class="col-3 mt-sm-2">
<label>
    <input value={{IDI}} data-id="{{ID}}" type="radio" name="actividadUno" class="card-input-element ra" />
      <div class="card card-default card-input">
        <div class="card-body">
            <span>{{ANSWERDES}}</span>
        </div>
      </div>
  </label>
</div>`;

const seleccionPregunta = `<div class="row ">
<div class="col-12 text-center ">
    <p><strong>{{QUESTION}}</strong></p>
</div>
</div>
<div class="row justify-content-center ">
<div class="col-6 ">
    <div class="card ">
         <img src="{{IMAGEN}}" alt=" " class="card-img-top ">
    </div>
</div>
</div>

<div class="respuestasSelect mt-3 ">
<div id="respuestas" class="row justify-content-center"></div>
</div>

<div class="botones">
<div class="row mt-2">
    <div class="col-lg-4 text-lg-start">
        <button data-anterior={{ANTERIOR}} class="btn" id="anterior">
        <svg xmlns="http://www.w3.org/2000/svg " width="16 " height="16 " fill="currentColor " class="bi bi-arrow-bar-left " viewBox="0 0 16 16 ">
            <path fill-rule="evenodd " d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5
    0 0 1 .5.5z "/>
        </svg> Anterior
    </button>
    </div>
    <div class="col-lg-4 offset-lg-4 text-lg-end">
        <button data-siguiente={{SIGUIENTE}} class="btn" id="siguiente">
        Siguiente <svg xmlns="http://www.w3.org/2000/svg " width="16 " height="16 " fill="currentColor " class="bi bi-arrow-bar-right " viewBox="0 0 16 16 ">
            <path fill-rule="evenodd " d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0
1 1 0v13a.5.5 0 0 1-.5.5z "/>
        </svg>
    </button>
    </div>
    <div class="col-lg-12 offset-lg-12 text-lg-center c-margin-top">
        <div class="d-grid gap-2">
            <button id="finalizar" type="button" class="btn btn-success btn-lg">Finalizar</button>
        </div>
    </div>
    `;

const vofPregunta = `<div class="row ">
<div class="col-8 ">
    <p>
        1. Enunciado 1
    </p>
</div>
<div class="col-4 botonesVerdaderoFalso">
    <label>
        <input type="radio" name="verdaderoFalso" class="card-input-element-v-f" id="verdadero"/>

          <div class="card card-default card-input-v-f">
            <div class="card-body">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                  </svg></span>
            </div>
          </div>
      </label>

    <label>
        <input type="radio" name="verdaderoFalso" class="card-input-element-v-f" id="falso"/>
          <div class="card card-default card-input-v-f">
            <div class="card-body">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                </span>
            </div>
          </div>
      </label>
</div>
</div>`;

const seleccionActividad = `<div class="primerActividad">
<div class="row">
    <div class="col-12 ">
        <h2 class="tituloPrincipal ">
            Actividad <span class="colorResaltar ">#{{ID}}</span>
        </h2>
    </div>
</div>
<div class="row ">
    <div class="col-12 ">
        <p>{{DESCRIPTION}}</p>
    </div>
</div>
<div class="row">
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>
    <div id="alertaSeleccion" class="alert alert-warning d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
    <div>
    Debe seleccionar una opcion antes de continuar.
    </div>
    </div>
</div>
<div id="pregunta"></div>
    </div>
</div>
</div>`;

const finalizarActividad = `
                    <div class="row justify-content-center">
                        <div class="col-3">
                            <img src="./assets/img/lapiz.png" height="200">
                        </div>
                    </div>
                    <br>
                    <div class="row d-flex justify-content-center">
                        <div class="col-12 d-flex justify-content-center">
                            <h1><strong>{{MENSAJE}}</strong></h1>
                        </div>
                    </div>
                    <div class="row  justify-content-center">
                        <div class="col-12 d-flex justify-content-center">
                            <h6><strong>Puntuacion Obtenida:</strong> {{PUNTUACION}}%</h6>
                        </div>
                    </div>
                    <div class="row  justify-content-center">
                        <div class="col-4">
                            <div class="d-grid gap-2">
                                <button id="volerInicio" type="button" class="btn btn-success btn-lg">Ir al inicio</button>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="d-grid gap-2">
                                <button id="realizarNuevo" type="button" class="btn btn-light btn-lg">Volver a intentar</button>
                            </div>
                        </div>
                    </div>
`;

export {
    seleccionActividad,
    seleccionRespuesta,
    seleccionPregunta,
    finalizarActividad,
    vofPregunta
}