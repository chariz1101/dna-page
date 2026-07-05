'use client';
import React from 'react';

interface EventCardProps {
  title: string;
  choreographers: string;
  status: string;
  link: string;
}

export default function EventCard({
  title,
  choreographers,
  status,
  link,
}: EventCardProps) {

  return (
    < a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 hover:border-[#00ff88]/50 transition-all duration-500 w-full h-full transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]"
    >

      <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px] p-5 sm:p-6">
        {/* Top row: status + arrow */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block bg-white/5 text-gray-400 group-hover:bg-[#00ff88]/10 group-hover:text-[#00ff88] border border-white/10 group-hover:border-[#00ff88]/30 font-medium px-3 py-1.5 rounded text-[10px] uppercase tracking-widest transition-all duration-300">
            {status}
          </span>
          <svg
            className="w-5 h-5 text-gray-600 group-hover:text-[#00ff88] transform group-hover:translate-x-1 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Title, given room to breathe and dominate */}
        <h2 className="text-2xl sm:text-3xl font-black text-white leading-[1.05] uppercase tracking-tight group-hover:text-[#00ff88] transition-colors duration-300 mb-6">
          {title}
        </h2>

        {/* Divider + choreography, pinned to bottom */}
        <div className="pt-4 border-t border-white/10 group-hover:border-[#00ff88]/20 transition-colors duration-300">
          <p className="text-gray-600 uppercase tracking-wider text-[10px] mb-1">
            Choreography
          </p>
          <p className="text-sm sm:text-base text-gray-300 font-medium">
            {choreographers}
          </p>
        </div>
      </div>
    </a>
  );
}