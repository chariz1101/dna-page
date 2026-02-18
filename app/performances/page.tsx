import { Header } from "@/components/header";
import EventCard from '@/components/performances-card';
import PerformancesFeed from "@/components/performances-feed";
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export const dynamic = 'force-dynamic';

async function getVideos() {
  try {
    const rows = await sql`
      SELECT * FROM videos 
      ORDER BY sheet_id DESC
    `;
    return rows;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
}

export default async function PerformancesPage() {
  const videos = await getVideos();

  return (
    <div className="min-h-screen bg-black text-white grid-bg">
      <Header />

      <main className="container-custom py-12 sm:py-16 md:py-20">
        {/* Page Title */}
        <div className="mb-12 sm:mb-16 fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-3 h-3 bg-[#00ff88] rounded-full glow-accent" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight">
              All Performances
            </h1>
          </div>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl ml-7 uppercase tracking-[0.15em] font-light">
            Complete Collection
          </p>
        </div>

        {/* Pass the data to the Client Component to handle Search/Filter */}
        <PerformancesFeed initialVideos={videos} />
        
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 sm:py-12 mt-16 sm:mt-20">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} .charchives
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-[1px] bg-[#00ff88]" />
              <p className="text-gray-600 text-xs uppercase tracking-widest">All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}