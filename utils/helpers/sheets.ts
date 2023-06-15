const authSheets = require('utils/helpers/sheetsAuth.ts');

exports.verifyEmail = async (email: string) =>{
    const {googleSheets, auth, spreadsheetId} = await authSheets();
};