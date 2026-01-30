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
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#ff3366] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff3366]/20 w-full h-full flex flex-col transform hover:-translate-y-2">
        {/* Image Container - Responsive Height */}
        <div className="relative w-full aspect-[4/5] bg-black flex-shrink-0 overflow-hidden">
          <Image
            src={!imgError && imageUrl ? imageUrl : '/banner1.svg'}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
            unoptimized
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Container */}
        <div className="p-4 sm:p-5 bg-white flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#ff3366] transition-colors">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
              <span className="font-semibold">By:</span> {choreographers}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="inline-block bg-gray-900 text-white font-medium px-3 py-1.5 rounded-full text-xs uppercase tracking-wider">
              {status}
            </span>
            <svg 
              className="w-5 h-5 text-[#ff3366] transform group-hover:translate-x-1 transition-transform"
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