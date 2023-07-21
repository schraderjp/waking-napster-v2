import type { PageServerLoad } from './$types';
import { google } from 'googleapis';

const sheets = google.sheets({ version: 'v4', auth: import.meta.env.VITE_GOOGLE_SHEETS_API_KEY });

const getSheetData = async () => {
    const res = await sheets.spreadsheets.values.batchGet({ spreadsheetId: '1iLDkWfvaCc5ealj12WFGSUTimksH4wDvPiZOIC3SPF4', ranges: ['A1:D200'] });
    const data = res.data;
    if (!data.valueRanges) return;
    return data.valueRanges[0].values as string[][]
}

export const load = (() => {
    // const res = await sheets.spreadsheets.values.batchGet({ spreadsheetId: '1iLDkWfvaCc5ealj12WFGSUTimksH4wDvPiZOIC3SPF4', ranges: ['A1:D200'] })
    // const data = res.data
    // if (!data.valueRanges) return;
    return {
        streamed: {
            rows: [['']],
            // data.valueRanges[0].values as object[],

            sheetTest: getSheetData()
        }
    };
}) satisfies PageServerLoad;