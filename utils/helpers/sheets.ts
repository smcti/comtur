const {google} = require("googleapis")
async function getAuthSheets(){
    const auth = new google.auth.GoogleAuth({
        keyFile: "utils/config/credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    })

    const client = await auth.getClient();
    const googleSheets = google.sheets({
        version: "v4",
        auth: client
    })

    const spreadsheetId = "1S0uFSj301wbPda9u5CqGhxvxvpdyOP21Uih589OSYEA"

    return{
        auth, 
        client,
        googleSheets,
        spreadsheetId
    }
}

module.exports = getAuthSheets;