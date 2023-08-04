import type { PageServerLoad } from './$types';

const getJsonRows = async () => {
    const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1iLDkWfvaCc5ealj12WFGSUTimksH4wDvPiZOIC3SPF4/values/All Songs?alt=json&key=${import.meta.env.VITE_GOOGLE_SHEETS_API_KEY}`)
    if (!res.ok) throw new Error('Failed to fetch songs.')
    const data = await res.json()
    return data;
}

export const load = (async ({ params }) => {

    const res = await getJsonRows();
    return {
        data: {
            rows: res.values
        }
    };
}) satisfies PageServerLoad;