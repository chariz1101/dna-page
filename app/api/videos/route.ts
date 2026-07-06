import { neon } from '@neondatabase/serverless';
import { NextRequest, NextResponse } from 'next/server';
import { getCached } from '@/lib/redis';

const sql = neon(process.env.DATABASE_URL!);

export const dynamic = 'force-dynamic';

// GET all videos or filter by type
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type');
    const limit = searchParams.get('limit') || '50';
    
    const cacheKey = `videos:${type ?? 'all'}:${limit}`;
    
    const videos = await getCached(cacheKey, 60, async () => {
      if (type) {
        return await sql`
          SELECT * FROM videos 
          WHERE type = ${type}
          ORDER BY sheet_id ASC
          LIMIT ${parseInt(limit)}
        `;
      } else {
        return await sql`
          SELECT * FROM videos 
          ORDER BY sheet_id ASC
          LIMIT ${parseInt(limit)}
        `;
      }
    });
 
    return NextResponse.json({
      success: true,
      count: videos.length, 
      videos: videos        
    });
 
  } catch (error) {
    console.error('Error fetching videos:', error);
    return NextResponse.json({
      error: 'Failed to fetch videos',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}