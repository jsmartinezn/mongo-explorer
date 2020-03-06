const formSearch = document.querySelector("#search");
const regSearch = document.querySelector("#form");

const resp = query => {
  for (let i = 0, len = query.options.length; i < len; i++) {
    const opt = query.options[i];
    if (opt.selected === true) {
      return opt;
    }
  }
  return null;
};

const crearFormulario = data => {
  const crear = document.querySelector("#crear");
  crear.innerHTML = "";

  const title = document.createElement("div");
  title.textContent = "Crear nuevo registro";
  crear.appendChild(title);

  const query = document.getElementById("data");
  const valor = resp(query);

  const query2 = document.getElementById("select");
  const valor2 = resp(query2);
  crear.action = "/" + valor.value + "_" + valor2.value;
  crear.method = "POST";

  for (const campo in data[data.length - 1]) {
    if (`${campo}` === "_id") {
    } else {
      const div = document.createElement("div");

      const label = document.createElement("label");
      label.for = `${campo}`;
      label.textContent = `${campo}:`;
      div.appendChild(label);

      const enter = document.createElement("br");
      div.appendChild(enter);

      const inp = document.createElement("input");
      inp.type = `${campo}`;
      inp.name = `${campo}`;
      inp.id = `${campo}`;
      inp.required = true;
      div.appendChild(inp);

      crear.appendChild(div);
    }
  }

  const divb = document.createElement("div");
  const enter = document.createElement("br");
  divb.appendChild(enter);
  const boton = document.createElement("button");
  boton.type = "submit";
  boton.textContent = "Insertar nuevo registro";
  divb.appendChild(boton);
  crear.appendChild(divb);

  const download = document.querySelector("#table");
  const nombre = document.createElement("div");
  nombre.textContent = "Exportar los registros a un archico csv";
  download.appendChild(nombre);
  const boton2 = document.createElement("button");
  boton2.type = "submit";
  boton2.textContent = "Descargar";
  download.appendChild(boton2);
};

const registrosF = data => {
  const final = document.querySelector("#final");
  final.innerHTML = "";

  const rHead = document.createElement("thead");
  const titulo = document.createElement("tr");
  for (const registro in data[data.length - 1]) {
    const rotulo = document.createElement("th");
    rotulo.textContent = `${registro}`;
    titulo.appendChild(rotulo);
  }
  rHead.appendChild(titulo);
  final.appendChild(rHead);

  const tBody = document.createElement("tbody");
  for (const i in data) {
    let separacion = document.createElement("tr");

    for (const registro in data[i]) {
      const contenido = document.createElement("td");
      contenido.textContent = `${data[i][registro]}`;
      separacion.appendChild(contenido);
    }
    tBody.appendChild(separacion);
  }
  final.appendChild(tBody);

  crearFormulario(data);
};

const searchR = evt => {
  const query = document.getElementById("data");
  const valor = resp(query);

  const query2 = document.getElementById("select");
  const valor2 = resp(query2);

  fetch(`http://localhost:3000/col/${valor.value}_${valor2.value}`)
    .then(coll => coll.json())
    .then(registrosF);

  evt.preventDefault();
};

const collections = data => {
  const lista = document.querySelector("#lista");
  const tabla = document.querySelector("#final");
  const crearForm = document.querySelector("#crear");
  const descarga = document.querySelector("#table");
  lista.innerHTML = "";
  regSearch.innerHTML = "";
  tabla.innerHTML = "";
  crearForm.innerHTML = "";
  descarga.innerHTML = "";

  const separacion = document.createElement("div");
  separacion.textContent = "Selecciona la coleccion a visualizar";
  lista.appendChild(separacion);

  lista.appendChild(regSearch);

  const select = document.createElement("select");
  select.id = "select";
  regSearch.appendChild(select);

  data.forEach(col => {
    const option = document.createElement("option");
    option.textContent = `${col.name}`;
    option.value = `${col.name}`;
    select.appendChild(option);
  });

  const boton = document.createElement("button");
  boton.type = "submit";
  boton.textContent = "Buscar registros";
  regSearch.appendChild(boton);
};

const onSearch = evt => {
  const query = document.getElementById("data");
  const valor = resp(query);

  fetch(`http://localhost:3000/db/${valor.value}`)
    .then(coll => coll.json())
    .then(collections);

  evt.preventDefault();
};

formSearch.addEventListener("submit", onSearch);
regSearch.addEventListener("submit", searchR);
