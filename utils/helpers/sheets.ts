const authSheets = require('utils/helpers/sheetsAuth.ts');

exports.verifyEmail = async (email: string) => {
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

exports.updateValues = (obj:any, keyMappings:any) => {
    let newObj:any = {};
    for (let key in obj) {
      if (keyMappings.hasOwnProperty(key) && keyMappings[key].hasOwnProperty(obj[key])) {
        newObj[key] = keyMappings[key][obj[key]];
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  };
  
  exports.verifyCPF = async (cpf: string) => {
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
    const cpfColumnIndex = headers.indexOf("cpf");
  
    if (cpfColumnIndex === -1) {
      throw new Error("CPF column not found");
    }
    const valuesRange = `COMTUR!${String.fromCharCode(65 + cpfColumnIndex)}:${String.fromCharCode(65 + cpfColumnIndex)}`;
    const cpfResponse = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: valuesRange,
    });
  
    if (!cpfResponse.data.values) {
      throw new Error("No cpf values found");
    }
  
    const cpfValues = cpfResponse.data.values.flat();
    return cpfValues.includes(cpf);
  };