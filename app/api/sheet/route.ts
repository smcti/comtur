import { NextResponse } from 'next/server'
const getAuthSheets = require('utils/helpers/sheetsAuth.ts');
const sheets = require('utils/helpers/sheets.ts');
const time = require("utils/helpers/datetime.ts");

export async function POST(req: Request) {
    
    const {googleSheets, auth, spreadsheetId} = await getAuthSheets();
    const values = await req.json();

    const headerRange = "COMTUR!1:1"; // Range to retrieve the header row
    const response = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: headerRange,
    });
    
    if(await sheets.verifyEmail(values.email)){
        return NextResponse.json({
            message: "Email já registrado"
        })
    }

    if(!response.data.values){
        return NextResponse.json({
            message: "No column headers found"
        })
    }

   
    values['data e hora'] = time.now();
    const headers = response.data.values[0];
    const headersObject: Record<string, any> = {};
    
    headers.forEach((header: string) => {
        const value = values[header];
        if (value !== undefined) {
            headersObject[header] = value;
        }
    });
    const valuesArray = headers.map((header: string) => headersObject[header]);    

    const row = await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "COMTUR",
        valueInputOption: "RAW",
        resource:{
            values: [valuesArray]
        }
    })
   
    return NextResponse.json({
        message: "Successfully inserterd data into COMTUR spreadsheets"
    })
  }