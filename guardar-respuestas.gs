const SHEET_ID = '1O-b8NoJpPzu13CS-j2UAxNWlzuubNmn115ZCCZc32OI';
const TAB_NAME = 'Respuestas RSVP';

function doPost(e) {
  const sheet = getResponseSheet_();
  const data = e && e.parameter ? e.parameter : {};
  sheet.appendRow([
    new Date(),
    data.nombre || '',
    data.asistencia || '',
    data.personas || '',
  ]);
  return ContentService.createTextOutput('OK');
}

function doGet() {
  return ContentService.createTextOutput('Servicio RSVP activo.');
}

function getResponseSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  let sheet = spreadsheet.getSheetByName(TAB_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(TAB_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Fecha de respuesta', 'Nombre', 'Asistencia', 'Número de personas']);
  }
  return sheet;
}



