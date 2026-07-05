"use client";

import { useState, useMemo } from "react";
import EventCard from '@/components/performances-card';

export default function PerformancesFeed({ initialVideos }: { initialVideos: any[] }) {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ["All", ...Array.from(new Set(initialVideos.map(v => v.type || "Other")))];

  const filteredVideos = useMemo(() => {
    return initialVideos.filter((video) => {
      const matchesSearch = video.title.toLowerCase().includes(search.toLowerCase());
      const matchesType = filterType === "All" || (video.type || "Other") === filterType;
      return matchesSearch && matchesType;
    });
  }, [search, filterType, initialVideos]);

  console.log("Filtered Videos:", filteredVideos); // Debugging log
  
  return (
    <>
      {/* --- ADDED 'relative z-30' HERE --- */}
      {/* This ensures the dropdown floats ABOVE the cards below */}
      <div className="relative z-30 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 sm:mb-16 fade-in">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-3xl">
          <input
            type="text"
            placeholder="SEARCH PERFORMANCES..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#0a0a0a] text-white placeholder-gray-600 py-4 sm:py-5 px-5 sm:px-6 rounded-lg text-sm sm:text-base border border-white/10 focus:border-[#00ff88] focus:outline-none transition-all uppercase tracking-wider"
          />
          <svg className="absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        {/* Filter Dropdown */}
        <div className="relative">
            <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center justify-center gap-3 bg-[#0a0a0a] border px-6 py-4 sm:py-5 rounded-lg transition-all text-sm sm:text-base uppercase tracking-[0.15em] font-medium min-w-[160px]
                ${isFilterOpen || filterType !== "All" ? "border-[#00ff88] text-[#00ff88]" : "border-white/10 hover:border-[#00ff88] text-white"}`}
            >
                <span>{filterType === "All" ? "Filter" : filterType}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={`transform transition-transform duration-300 ${isFilterOpen ? "rotate-180" : ""}`}>
                    <path d="M7 10l5 5 5-5H7z" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isFilterOpen && (
                <div className="absolute right-0 top-full mt-2 w-full min-w-[200px] bg-[#0a0a0a] border border-[#00ff88]/30 rounded-lg shadow-xl z-50 py-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setFilterType(cat);
                                setIsFilterOpen(false);
                            }}
                            className={`block w-full text-left px-4 py-3 text-sm uppercase tracking-wider hover:bg-[#00ff88]/10 hover:text-[#00ff88] transition-colors
                            ${filterType === cat ? "text-[#00ff88]" : "text-gray-400"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            )}
        </div>
      </div>

      {/* Grid - Kept at z-0 (default) so it stays behind */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 stagger-children">
        {filteredVideos.map((video) => (
          <EventCard
            key={video.id}
            title={video.title}
            choreographers={video.choreographers || "N/A"}
            status={video.type || "Event"}
            link={video.link}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-20 sm:py-32 border border-white/5 rounded-2xl bg-[#0a0a0a]">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 border-2 border-white/10 rounded-full flex items-center justify-center">
               <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </div>
            <p className="text-gray-600 text-base sm:text-lg font-light uppercase tracking-widest">
              No performances found
            </p>
            <button onClick={() => { setSearch(""); setFilterType("All"); }} className="mt-4 text-[#00ff88] text-sm uppercase tracking-wider hover:underline">
                Clear Filters
            </button>
          </div>
        </div>
      )}
    </>
  );
}