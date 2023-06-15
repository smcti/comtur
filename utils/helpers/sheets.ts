const authSheets = require('utils/helpers/sheetsAuth.ts');

exports.verifyEmail = async (email: string) =>{
    const { googleSheets, auth, spreadsheetId } = await authSheets();

    const headerRange = "COMTUR!1:1"; 
    const response = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: headerRange,
    });
    
    if (!response.data.values) {
        throw new Error("No column headers found");
    }
    
    const headers = response.data.values[0];
    const emailColumnIndex = headers.indexOf("email");
    
    if (emailColumnIndex === -1) {
        throw new Error("Email column not found");
    }
    const valuesRange = `COMTUR!${String.fromCharCode(65 + emailColumnIndex)}:${String.fromCharCode(65 + emailColumnIndex)}`;
    const emailResponse = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: valuesRange,
    });
    
    if (!emailResponse.data.values) {
        throw new Error("No email values found");
    }
    
    const emailValues = emailResponse.data.values.flat(); 
    return emailValues.includes(email);
};