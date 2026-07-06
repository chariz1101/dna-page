import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { getCached } from '@/lib/redis';

const sql = neon(process.env.DATABASE_URL!);

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const members = await getCached('members:all', 60, async () => {
      return await sql`
        SELECT id, name, image, yearAndSectionM
        FROM members 
        ORDER BY name ASC
      `;
    });
    return NextResponse.json({ success: true, members });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}