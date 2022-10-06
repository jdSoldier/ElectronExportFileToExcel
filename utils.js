const personal = [
  {
    dni: 75441002,
    nombres: "josue david",
    apellidos: "ñaure cervantes",
  },
  {
    dni: 44040711,
    nombres: "Diana Margot",
    apellidos: "Olivares Martinez",
  },
  {
    dni: 61322584,
    nombres: "Rosmar",
    apellidos: "Olivares Martinez",
  },
  {
    dni: 47217217,
    nombres: "Luis Guillermo",
    apellidos: "Guerrero Huaman",
  },
  {
    dni: 75507167,
    nombres: "Nicole Janeth",
    apellidos: "La Riva Gonzales",
  },
  {
    dni: 73008263,
    nombres: "Orlando Moisés",
    apellidos: "Muñoz Ramos",
  },
  {
    dni: 3718215,
    nombres: "Jose Leonardo",
    apellidos: "Vasquez Perillo",
  },
];

const dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Setiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  var ap = hr < 12 ? "<span>AM</span>" : "<span>PM</span>";
  hr = hr == 0 ? 12 : hr;
  hr = hr > 12 ? hr - 12 : hr;
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("hora").innerHTML = `${hr} : ${min} : ${sec} : ${ap}`;
  var time = setTimeout(function () {
    startTime();
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function theDate() {
  let d = new Date();
  document.getElementById("fecha").innerHTML = `${
    dias[d.getDay() - 1]
  } ${d.getDate()} de ${meses[d.getMonth()]} del ${d.getFullYear()}`;
}

export { personal, dias, meses, startTime, theDate };
