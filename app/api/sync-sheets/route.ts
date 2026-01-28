import { google } from 'googleapis';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function POST() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '17pkmCkdTsfBQp7ohrV6eD6gXnpF6l8Cxq2Az7JLUpho';

    // 1. SYNC OFFICERS
    const offRes = await sheets.spreadsheets.values.get({ spreadsheetId, range: 'officers!A:E' });
    if (offRes.data.values) {
      await sql`DROP TABLE IF EXISTS officers`;
      await sql`CREATE TABLE officers (
        id SERIAL PRIMARY KEY, sheet_id INTEGER, name TEXT, position TEXT, "year-and-section" TEXT, image TEXT
      )`;
      for (const row of offRes.data.values.slice(1)) {
        const [sid, name, pos, ys, img] = row;
        await sql`INSERT INTO officers (sheet_id, name, position, "year-and-section", image) 
                  VALUES (${sid ? parseInt(sid) : null}, ${name || null}, ${pos || null}, ${ys || null}, ${img || null})`;
      }
    }

    // 2. SYNC MEMBERS
    const memRes = await sheets.spreadsheets.values.get({ spreadsheetId, range: 'members!A:E' });
    if (memRes.data.values) {
      await sql`DROP TABLE IF EXISTS members`;
      await sql`CREATE TABLE members (
        id SERIAL PRIMARY KEY, sheet_id INTEGER, name TEXT, "year-and-section" TEXT, image TEXT
      )`;
      for (const row of memRes.data.values.slice(1)) {
        const [sid, name, _, ys, img] = row;
        await sql`INSERT INTO members (sheet_id, name, "year-and-section", image) 
                  VALUES (${sid ? parseInt(sid) : null}, ${name || null}, ${ys || null}, ${img || null})`;
      }
    }

    return NextResponse.json({ success: true, message: "Tables recreated and synced." });
  } catch (error) {
    return NextResponse.json({ error: 'Sync failed', details: error }, { status: 500 });
  }
}