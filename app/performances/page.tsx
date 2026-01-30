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
    <div className="min-h-screen gradient-bg text-white">
      <Header />

      <main className="container-custom py-8 sm:py-12 md:py-16">
        {/* Page Title */}
        <div className="mb-8 sm:mb-12 fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-2 sm:mb-4">
            All Performances
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl">
            Browse our complete collection of dance performances
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8 sm:mb-12 fade-in">
          <div className="relative flex-1 max-w-3xl">
            <input
              type="text"
              placeholder="Search for keywords... e.g.: Hip-hop, CFest"
              className="w-full bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 py-3 sm:py-4 px-4 sm:px-6 rounded-full text-sm sm:text-base md:text-lg border border-white/20 focus:border-[#ff3366] focus:outline-none transition-all"
            />
            <svg 
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-[#ff3366] border border-white/20 hover:border-[#ff3366] px-6 py-3 sm:py-4 rounded-full transition-all text-sm sm:text-base">
            <span>Filter</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </button>
        </div>

        {/* Grid Section - Responsive columns */}
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
          <div className="text-center py-16 sm:py-20">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 sm:p-16 border border-white/10">
              <svg 
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-400 text-lg sm:text-xl font-light">
                No performances found.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 sm:py-12 text-center mt-12 sm:mt-16">
        <div className="container-custom">
          <p className="text-gray-500 text-sm sm:text-base">
            © {new Date().getFullYear()} Dancing Nurses Association. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}