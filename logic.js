import { personal, dias, meses, startTime, theDate } from "./utils.js";

startTime();
theDate();

const headerFecha = document.querySelector(".header-fecha");
const headerHora = document.querySelector(".header-hora");

const controlFormDni = document.querySelector(".control-form-dni");
const controlFormNombres = document.querySelector(".control-form-nombres");
const controlFormApellidos = document.querySelector(".control-form-apellidos");
const controlFormTipo = document.querySelector(".control-form-tipo");
const controlFormSubmit = document.querySelector(".submitBtn");
const viewAnswer = document.querySelector(".view-answer");

controlFormDni.addEventListener("change", completeForm);
controlFormSubmit.addEventListener("click", guardar);

function completeForm(e) {
  for (let i = 0; i < personal.length; i++) {
    if (e.target.value == personal[i].dni) {
      controlFormNombres.value = personal[i].nombres;
      controlFormApellidos.value = personal[i].apellidos;
    }
    if (e.target.value == "") {
      controlFormNombres.value = "";
      controlFormApellidos.value = "";
    }
  }
}

function guardar(e) {
  e.preventDefault();
  const resp = {
    dni: controlFormDni.value,
    nombres: controlFormNombres.value,
    apellidos: controlFormApellidos.value,
    tipo: controlFormTipo.value,
    fecha: headerFecha.innerText,
    hora: headerHora.innerText,
  };

  const arrayRegistros = [];
  if (!localStorage.getItem("a")) {
    localStorage.setItem("a", JSON.stringify(resp));
  } else {
    arrayRegistros.push(JSON.parse(localStorage.getItem("a")));
    arrayRegistros.push(resp);
    localStorage.setItem("a", JSON.stringify(arrayRegistros.flat()));
  }

  setTimeout(function () {
    viewAnswer.innerText = "";
  }, 2000);
  viewAnswer.innerText = "Grabado con Exito!";
  controlFormDni.value = "default";
  controlFormNombres.value = "";
  controlFormApellidos.value = "";
}
