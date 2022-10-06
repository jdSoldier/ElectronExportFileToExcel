let completeArr = JSON.parse(localStorage.getItem("a"));

function buildTable(data) {
  var table = document.querySelector(".table-body");

  data.forEach((element) => {
    var row = `<tr>
            <td>${element.dni}</td>
            <td>${element.nombres}</td>
            <td>${element.apellidos}</td>
            <td>${element.tipo}</td>
            <td>${element.fecha}</td>
            <td>${element.hora}</td>
            </tr>`;
    table.innerHTML += row;
  });
}

buildTable(completeArr);
