const templateDiccionario = ` <div class="row mb-3">
<div class="col-12">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title" id="titulo">{{NOMBRE}}</h5>
            <h6 class="card-subtitle mb-2 text-muted" id="subTitulo">{{TIPO}}</h6>
            <div class="row">
                <div class="col-1">
                    <img src="{{IMAGEN}}" alt="" class="img-fluid">
                </div>
                <div class="col-9">
                    <p class="texto">{{DESCRIPCION}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;

export{ templateDiccionario};