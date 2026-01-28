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
    <div className="min-h-screen bg-[#121212] text-white">
      <Header />

      <main className="container mx-auto px-4 md:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search for keywords... e.g.: Hip-hop, CFest"
              className="w-full bg-[#f5f5f5] text-black py-3 px-6 rounded-full text-lg focus:outline-none"
            />
          </div>
          <button className="flex items-center gap-2 bg-[#333] hover:bg-[#444] px-6 py-3 rounded-md transition-colors">
            <span className="text-lg">Filter</span>
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

        {/* Grid Section - Set to 5 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl font-light">
              No performances found.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}