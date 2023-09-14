const { google } = require("googleapis");
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

module.exports = gGetAuthSheets;
