import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const rows = await sql`
      SELECT id, name, image, yearAndSectionM
      FROM members 
      ORDER BY name ASC
    `;
    return NextResponse.json({ success: true, members: rows });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}