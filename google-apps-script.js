function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Validar si hay datos entrantes
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": "No data received"}))
                          .setMimeType(ContentService.MimeType.JSON);
    }
    
    var data = JSON.parse(e.postData.contents);
    
    // Agregar la fila a tu Google Sheet
    sheet.appendRow([
      data.fecha || new Date().toISOString(),
      data.nombre || "",
      data.producto || "",
      data.cantidad || 0,
      data.total || 0,
      data.metodo || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({"status": "success"}))
                        .setMimeType(ContentService.MimeType.JSON);
                        
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": error.toString()}))
                        .setMimeType(ContentService.MimeType.JSON);
  }
}

// Función opcional para pruebas manuales si haces clic en "Ejecutar"
function doGet(e) {
  return ContentService.createTextOutput("El servicio web está activo y funcionando correctamente.");
}