import type { PageServerLoad } from './$types';
import { google } from 'googleapis';

const csr = false;

const sheets = google.sheets({ version: 'v4', auth: import.meta.env.VITE_GOOGLE_API_KEY });


export const load = (async () => {
    const res = await sheets.spreadsheets.values.batchGet({ spreadsheetId: '1iLDkWfvaCc5ealj12WFGSUTimksH4wDvPiZOIC3SPF4', ranges: ['A1:D100'] })
    const data = res.data
    if (!data.valueRanges) return;
    return {
        rows: data.valueRanges[0].values as object[]
    };
}) satisfies PageServerLoad;