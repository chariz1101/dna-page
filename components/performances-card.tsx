import Image from 'next/image';
import React from 'react';

interface EventCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  status: string;
  link: string;
}

export default function EventCard({
  imageUrl,
  imageAlt,
  title,
  subtitle,
  status,
  link,
}: EventCardProps) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full block hover:scale-105 transition-transform duration-200"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-md border-4 border-white cursor-pointer">
        {/* Image Container */}
        <div className="relative w-full aspect-square bg-black rounded-t-xl overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="p-4 bg-white">
          <h2 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2">
            {title}
          </h2>
          <p className="text-xs text-gray-600 mb-3 line-clamp-1">
            {subtitle}
          </p>
          <span className="inline-block bg-gray-200 text-gray-800 font-medium px-3 py-1.5 rounded-full text-xs">
            {status}
          </span>
        </div>
      </div>
    </a>
  );
}