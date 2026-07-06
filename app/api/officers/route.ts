import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { getCached } from '@/lib/redis';

const sql = neon(process.env.DATABASE_URL!);

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const officers = await getCached('officers:all', 60, async () => {
      return await sql`
        SELECT id, name, position, image, yearAndSectionM 
        FROM officers 
        ORDER BY id ASC
      `;
    });
    return NextResponse.json({ success: true, officers });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}