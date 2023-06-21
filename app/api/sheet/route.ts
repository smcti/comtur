import { NextResponse } from 'next/server'
const getAuthSheets = require('utils/helpers/sheetsAuth.ts');
const sheets = require('utils/helpers/sheets.ts');
const time = require("utils/helpers/datetime.ts");
const keyMapping = require('public/keyMapping.json');

export async function POST(req: Request) {
    try {
        const { googleSheets, auth, spreadsheetId } = await getAuthSheets();
        let values = await req.json();
        const headerRange = "COMTUR!1:1"; // Range to retrieve the header row
        const response = await googleSheets.spreadsheets.values.get({
            auth,
            spreadsheetId,
            range: headerRange,
        });


        const checkbox_keys = [
            "spr_acesso_saude", "spr_compras", "spr_estudos", "spr_negocios_trabalho", "spr_outro",
            "osc_acesso_saude", "osc_compras", "osc_estudos", "osc_negocios_trabalho", "osc_outro",
            "destino_conexoes_cwb"
        ];
        checkbox_keys.forEach(checkboxKey => {
            const matchingValues = Object.entries(values)
              .filter(([key]) => key.includes(checkboxKey))
              .map(([, value]) => value);
          
            values[checkboxKey] = matchingValues.join(", ");
          });

        if (!values.email) {
            return NextResponse.json({
                message: "Email não inserido",
            },
                {
                    status: 400
                }
            )
        }

        if (await sheets.verifyEmail(values.email)) {
            return NextResponse.json({
                message: "Email já registrado",
            },
                {
                    status: 401
                })
        }

        if (!response.data.values) {
            return NextResponse.json({
                message: "No column headers found"
            },
                {
                    status: 204
                }
            )
        }


        values['regDate'] = time.now();
        values = sheets.updateValues(values, keyMapping)
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
            resource: {
                values: [valuesArray]
            }
        })

        return NextResponse.json({
            message: "Dados enviados com sucesso!"
        })
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Server error",
        }, {
            status: 500
        }
        );
    }
}