import type { RequestHandler } from './$types';
import { google } from 'googleapis';
const sheets = google.sheets({ version: 'v4', auth: import.meta.env.VITE_GOOGLE_SHEETS_API_KEY });

const getJsonRows = async () => {
    const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1iLDkWfvaCc5ealj12WFGSUTimksH4wDvPiZOIC3SPF4/values/All Songs?alt=json&key=${import.meta.env.VITE_GOOGLE_SHEETS_API_KEY}`)
    if (!res.ok) throw new Error('Failed to fetch songs.')
    const data = await res.json()
    return data;
}

const getSheetData = async () => {
    const res = await sheets.spreadsheets.values.batchGet({ spreadsheetId: '1iLDkWfvaCc5ealj12WFGSUTimksH4wDvPiZOIC3SPF4', ranges: ['A1:D200'] });
    const data = res.data;
    if (!data.valueRanges) return;
    return data.valueRanges[0].values as string[][]
}

export const GET: RequestHandler = async () => {
    const res = await getJsonRows();
    console.log(res.values)
    return new Response(JSON.stringify(res.values));
};