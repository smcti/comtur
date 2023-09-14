import { NextResponse } from "next/server";
const gGetAuthSheets = require("utils/helpers/pdf/sheetsAuth.ts");
const sheets = require("utils/helpers/pdf/sheets.ts");
const time = require("utils/helpers/datetime.ts");

interface ValuesTypes {
  regDate: string;
  nome: string;
  email: string;
  area: string;
}

export async function POST(req: Request) {
  try {
    const { googleSheets, auth, spreadsheetId } =
      await gGetAuthSheets();
    let values = await req.json();
    const headerRange = "Sheet1!A1:D1"; // Range to retrieve the header row
    const response = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: headerRange,
    });

    if (!response.data.values) {
      return NextResponse.json(
        {
          message: "No column headers found",
        },
        {
          status: 204,
        }
      );
    }

    values["regDate"] = time.now();
    // values = sheets.updateValues(values);
    const headers = response.data.values[0];
    const empty = [];
    const headersObject: Record<string, any> = {};
    headers.forEach((header: string) => {
      const value: ValuesTypes = values[header];
      if (value !== undefined) {
        headersObject[header] = value;
      }
    });
    const valuesArray = headers.map(
      (header: string) => headersObject[header]
    );

    // console.log(valuesArray);
    if (valuesArray[1] == "") {
      empty.push("nome");
    }

    if (valuesArray[2] == "") {
      empty.push("email");
    }

    if (valuesArray[3] == "") {
      empty.push("area");
    }

    if (empty[0]) {
      return NextResponse.json(
        {
          message: "Fields can't be empty",
          empty: empty.map((item) => {
            return item;
          }),
        },
        {
          status: 400,
        }
      );
    }

    const row = await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: "Sheet1",
      valueInputOption: "RAW",
      resource: {
        values: [valuesArray],
      },
    });

    return NextResponse.json({
      message: "Dados enviados com sucesso!",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error,
      },
      {
        status: 500,
      }
    );
  }
}
