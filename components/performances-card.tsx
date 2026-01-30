'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface EventCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  choreographers: string;
  status: string;
  link: string;
}

export default function EventCard({
  imageUrl,
  imageAlt,
  title,
  choreographers,
  status,
  link,
}: EventCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 hover:border-[#00ff88]/50 transition-all duration-500 w-full h-full flex flex-col transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/5] bg-black flex-shrink-0 overflow-hidden">
          <Image
            src={!imgError && imageUrl ? imageUrl : '/banner1.svg'}
            alt={imageAlt}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
            onError={() => setImgError(true)}
            unoptimized
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          {/* Green accent on hover */}
          <div className="absolute inset-0 bg-[#00ff88]/0 group-hover:bg-[#00ff88]/5 transition-all duration-500" />
        </div>

        {/* Content Container */}
        <div className="p-4 sm:p-5 bg-[#0a0a0a] flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-[#00ff88] transition-colors duration-300 uppercase tracking-wide">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-3 line-clamp-2">
              <span className="text-gray-600 uppercase tracking-wider text-[10px]">Choreography:</span><br/>
              <span className="text-gray-400">{choreographers}</span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="inline-block bg-white/5 text-gray-400 group-hover:bg-[#00ff88]/10 group-hover:text-[#00ff88] border border-white/10 group-hover:border-[#00ff88]/30 font-medium px-3 py-1.5 rounded text-xs uppercase tracking-widest transition-all duration-300">
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
        </div>
      </div>
    </a>
  );
}