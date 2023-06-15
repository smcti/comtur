import { NextResponse } from 'next/server'
const getAuthSheets = require('utils/helpers/sheets.ts');
const time = require("utils/helpers/datetime.ts");

export async function POST(req: Request) {
    
    const {googleSheets, auth, spreadsheetId} = await getAuthSheets();
    console.log(time.now());
    const {values} = await req.json();
    values[0].unshift(time.now());
    console.log(values);
    const row = await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "COMTUR",
        valueInputOption: "RAW",
        resource:{
            values: values
        }
    })
   
    return NextResponse.json({
        message: "Successfully inserterd data into COMTUR spreadsheets"
    })
  }