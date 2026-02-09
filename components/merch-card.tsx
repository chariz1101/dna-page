import Image from "next/image";
import Link from "next/link";

interface MerchCardProps {
  id: string | number;
  title: string;
  variations: string; // e.g., "S, M, L" or "Red, Blue"
  link: string;
  image: string;
}

export default function MerchCard({ id, title, variations, link, image }: MerchCardProps) {
  return (
    <Link 
      href={link} 
      target="_blank" // Opens in new tab (optional)
      className="group block relative bg-[#0a0a0a] border border-white/10 hover:border-[#00ff88] transition-all duration-500 rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]"
    >
      {/* Image Container - Square Aspect Ratio */}
      <div className="relative w-full aspect-square overflow-hidden bg-[#1a1a1a]">
        
        {/* The Image */}
        <Image
          src={image || "/placeholder.jpg"} 
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />

        {/* Overlay Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
        
        {/* "View Item" Badge (Appears on Hover) */}
        <div className="absolute bottom-3 right-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
           <span className="bg-[#00ff88] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
             View Item
           </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-2">
        {/* Title */}
        <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-[#00ff88] transition-colors duration-300">
          {title}
        </h3>

        {/* Variations (Sizes/Colors) */}
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500 font-medium uppercase tracking-widest">
            Variation:
          </span>
          <span className="text-xs text-white/80 font-mono border border-white/20 px-2 py-0.5 rounded">
            {variations}
          </span>
        </div>
      </div>
    </Link>
  );
}