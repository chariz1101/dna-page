import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// GET all videos or filter by type
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type');
    const limit = searchParams.get('limit') || '50';
    
    let result;
    
    if (type) {
      // Filter by type
      result = await sql`
        SELECT * FROM videos 
        WHERE type = ${type}
        ORDER BY sheet_id ASC
        LIMIT ${parseInt(limit)}
      `;
    } else {
      // Get all videos
      result = await sql`
        SELECT * FROM videos 
        ORDER BY sheet_id ASC
        LIMIT ${parseInt(limit)}
      `;
    }

    return NextResponse.json({
      success: true,
      count: result.rows.length,
      videos: result.rows
    });

  } catch (error) {
    console.error('Error fetching videos:', error);
    return NextResponse.json({
      error: 'Failed to fetch videos',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}