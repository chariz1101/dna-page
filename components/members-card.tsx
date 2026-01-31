import Image from "next/image";

interface MemberCardProps {
  name: string;
  yearandsectionm: string;
  imageUrl: string;
}

export default function MemberCard({ name, yearandsectionm, imageUrl }: MemberCardProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      {/* Circular Image Container */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-3 sm:mb-4 md:mb-6">
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#00ff88] bg-[#0a0a0a] shadow-xl transition-all duration-500 grayscale group-hover:grayscale-0">
          <Image
            src={imageUrl || "/logo.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-[#00ff88] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
      </div>

      {/* Name and Section */}
      <div className="space-y-1">
        <h3 className="text-base sm:text-m md:text-lg font-bold text-white tracking-tight group-hover:text-[#00ff88] transition-colors duration-300 uppercase">
          {name}
        </h3>
          <p className="text-m text-gray-500 font-medium uppercase tracking-[0.2em]">
            {yearandsectionm}
          </p>
      </div>
    </div>
  );
}