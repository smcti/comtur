/* const { google } = require("googleapis");
// import google from "googleapis";

async function gGetAuthSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "utils/config/credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();
  const googleSheets = google.sheets({
    version: "v4",
    auth: client,
  });

  const spreadsheetId =
    "1T9--sW0_3zOt3yg7Sk8rTmwSA2NtCpzPr1qBReLunkQ";

  console.log({
    auth,
    client,
    googleSheets,
    spreadsheetId,
  });

  return {
    auth,
    client,
    googleSheets,
    spreadsheetId,
  };
}

module.exports = gGetAuthSheets; */
// Em: utils/helpers/pdf/sheetsAuth.ts

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
