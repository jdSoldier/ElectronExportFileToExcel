const XLSX = require("xlsx");
const electron = require("@electron/remote");

/* list of supported extensions */
const EXTENSIONS =
  "xls|xlsx|xlsm|xlsb|xml|csv|txt|dif|sylk|slk|prn|ods|fods|htm|html|numbers".split(
    "|"
  );

/* write file with Electron API */
async function exportFile() {
  let aoo = [...JSON.parse(localStorage.getItem("a"))];

  const ws = XLSX.utils.json_to_sheet(aoo);
  const new_wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(new_wb, ws, "Sheet1");

  XLSX.utils.sheet_add_aoa(
    ws,
    [["DNI", "NOMBRES", "APELLIDOS", "TIPO", "FECHA", "HORA"]],
    { origin: "A1" }
  );

  const o = await electron.dialog.showSaveDialog({
    title: "Save file as",
    filters: [
      {
        name: "Spreadsheets",
        extensions: EXTENSIONS,
      },
    ],
  });
  XLSX.writeFile(new_wb, o.filePath);
  electron.dialog.showMessageBox({
    message: "Exported data to " + o.filePath,
    buttons: ["OK"],
  });
}
document.getElementById("exportBtn").addEventListener("click", exportFile);
