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
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="relative block hover:scale-105 transition-transform duration-200"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-white rounded-2xl overflow-hidden shadow-md border-4 border-white cursor-pointer w-[280px] h-[380px] flex flex-col">
          {/* Image Container - Fixed Height */}
          <div className="relative w-full h-[280px] bg-black flex-shrink-0 overflow-hidden">
            <Image
              src={!imgError && imageUrl ? imageUrl : '/banner1.svg'}
              alt={imageAlt}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
              unoptimized
            />
          </div>

          {/* Content Container - Fixed Height */}
          <div className="p-4 bg-white h-[100px] flex-shrink-0 flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-bold text-gray-900 mb-1 line-clamp-1">
                {title}
              </h2>
              <p className="text-xs italic text-gray-600 mb-2 line-clamp-1">
                {choreographers}
              </p>
            </div>
            <span className="inline-block bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-full text-xs w-fit">
              {status}
            </span>
          </div>
        </div>
      </a>

      {/* Tooltip on hover */}
      {showTooltip && (
        <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-gray-900 text-white text-sm rounded-lg shadow-xl p-4 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-gray-900"></div>
          <h3 className="font-bold mb-2">{title}</h3>
          <p className="text-xs mb-2">
            <span className="font-semibold">Choreographers:</span> {choreographers}
          </p>
          <p className="text-xs">
            <span className="font-semibold">Type:</span> {status}
          </p>
        </div>
      )}
    </div>
  );
}