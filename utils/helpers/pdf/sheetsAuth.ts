const { google } = require("googleapis");

async function gGetAuthSheets() {
  // Esta é a forma correta de autenticar em ambientes GCP como o Cloud Run.
  // Ele usará automaticamente a identidade da Conta de Serviço do seu serviço.
  const auth = new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  return {
    auth,
    googleSheets: sheets,
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
  };
}

module.exports = gGetAuthSheets;
