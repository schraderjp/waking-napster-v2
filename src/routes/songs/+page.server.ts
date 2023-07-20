import type { PageServerLoad } from './$types';
import { google } from 'googleapis';

const sheets = google.sheets({ version: 'v4', auth: import.meta.env.VITE_GOOGLE_API_KEY });


export const load = (async () => {
    const res = await sheets.spreadsheets.get({ spreadsheetId: '1iLDkWfvaCc5ealj12WFGSUTimksH4wDvPiZOIC3SPF4' })
    const data = res.data.sheets;

    return {
        data
    };
}) satisfies PageServerLoad;