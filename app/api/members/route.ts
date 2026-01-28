import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { rows } = await sql`
      SELECT id, name, image, "year-and-section" AS "yearAndSection" 
      FROM members 
      ORDER BY name ASC
    `;
    return NextResponse.json({ success: true, members: rows });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}