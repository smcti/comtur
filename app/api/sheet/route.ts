import { NextResponse } from 'next/server'
const getAuthSheets = require('utils/helpers/sheets.ts');

export async function POST(req: Request) {
    
    const {googleSheets, auth, spreadsheetId} = await getAuthSheets();

    const {values} = await req.json();
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
   
    return NextResponse.json({row})
  }