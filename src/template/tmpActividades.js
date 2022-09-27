const seleccionRespuesta = `<div class="col-4 mt-sm-2">
<label>
    <input type="radio" name="actividadUno" class="card-input-element" />
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
        <!-- <img src="../assets/img/lapiz.png " alt=" " class="card-img-top "> -->
    </div>
</div>
</div>

<div class="respuestasSelect mt-3 ">
<div id="respuestas" class="row justify-content-center"></div>
</div>

<div class="botones">
<div class="row mt-2">
    <div class="col-lg-4 text-lg-start">
        <button class="btn " id="anterior">
        <svg xmlns="http://www.w3.org/2000/svg " width="16 " height="16 " fill="currentColor " class="bi bi-arrow-bar-left " viewBox="0 0 16 16 ">
            <path fill-rule="evenodd " d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5
    0 0 1 .5.5z "/>
        </svg> Anterior
    </button>
    </div>
    <div class="col-lg-4 offset-lg-4 text-lg-end">
        <button class="btn" id="siguiente">
        Siguiente <svg xmlns="http://www.w3.org/2000/svg " width="16 " height="16 " fill="currentColor " class="bi bi-arrow-bar-right " viewBox="0 0 16 16 ">
            <path fill-rule="evenodd " d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0
1 1 0v13a.5.5 0 0 1-.5.5z "/>
        </svg>
    </button>
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
<div id="pregunta"></div>
    </div>
</div>
</div>`;

export {
    seleccionActividad,
    seleccionRespuesta,
    seleccionPregunta
}