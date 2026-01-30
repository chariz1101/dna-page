import { Header } from "@/components/header";
import EventCard from '@/components/performances-card';
import { sql } from '@vercel/postgres';

async function getVideos() {
  try {
    const { rows } = await sql`
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

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 sm:mb-16 fade-in">
          <div className="relative flex-1 max-w-3xl">
            <input
              type="text"
              placeholder="SEARCH PERFORMANCES..."
              className="w-full bg-[#0a0a0a] text-white placeholder-gray-600 py-4 sm:py-5 px-5 sm:px-6 rounded-lg text-sm sm:text-base border border-white/10 focus:border-[#00ff88] focus:outline-none transition-all uppercase tracking-wider"
            />
            <svg 
              className="absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <button className="flex items-center justify-center gap-3 bg-[#0a0a0a] hover:bg-[#00ff88] hover:text-black border border-white/10 hover:border-[#00ff88] px-6 py-4 sm:py-5 rounded-lg transition-all text-sm sm:text-base uppercase tracking-[0.15em] font-medium group">
            <span>Filter</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="transform group-hover:rotate-180 transition-transform duration-300"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 stagger-children">
          {videos.map((video) => (
            <EventCard
              key={video.id}
              imageUrl={video.image || "/placeholder-dance.jpg"}
              imageAlt={`${video.title} event`}
              title={video.title}
              choreographers={video.choreographers || "N/A"}
              status={video.type || "Intermission"}
              link={video.link}
            />
          ))}
        </div>

        {/* Empty State */}
        {videos.length === 0 && (
          <div className="text-center py-20 sm:py-32 border border-white/5 rounded-2xl bg-[#0a0a0a]">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 border-2 border-white/10 rounded-full flex items-center justify-center">
                <svg 
                  className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-600 text-base sm:text-lg font-light uppercase tracking-widest">
                No performances found
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 sm:py-12 mt-16 sm:mt-20">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} D.N.A.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-[1px] bg-[#00ff88]" />
              <p className="text-gray-600 text-xs uppercase tracking-widest">Dancing Nurses Association</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}