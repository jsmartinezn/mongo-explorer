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
  const query = document.getElementById("data");
  const valor = resp(query);

  const query2 = document.getElementById("select");
  const valor2 = resp(query2);
  crear.action = "/" + valor.value + "_" + valor2.value;
  crear.method = "POST";

  for (const campo in data[data.length - 1]) {
    const div = document.createElement("div");
    const label = document.createElement("label");
    label.for = `${campo}`;
    label.textContent = `${campo}`;
    div.appendChild(label);

    const inp = document.createElement("input");
    inp.type = `${campo}`;
    inp.name = `${campo}`;
    inp.id = `${campo}`;
    inp.required = true;
    div.appendChild(inp);

    crear.appendChild(div);
  }

  const divb = document.createElement("div");
  const boton = document.createElement("button");
  boton.type = "submit";
  boton.textContent = "Insertar nuevo registro";
  divb.appendChild(boton);
  crear.appendChild(divb);
};

const registrosF = data => {
  const final = document.querySelector("#final");
  final.innerHTML = "";

  for (const i in data) {
    const separacion = document.createElement("div");
    const separacion2 = document.createElement("br");
    const num = parseInt(i) + 1;
    separacion.textContent = `Información del registro: ${num}`;
    final.appendChild(separacion2);
    final.appendChild(separacion);
    for (const registro in data[i]) {
      const contenido = document.createElement("div");
      contenido.class = "contenido";
      contenido.textContent = `${registro} = ${data[i][registro]}`;
      final.appendChild(contenido);
    }
  }

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

  lista.innerHTML = "";
  regSearch.innerHTML = "";

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
