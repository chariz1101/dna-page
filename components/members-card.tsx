import Image from "next/image";

interface MemberCardProps {
  name: string;
  yearSection?: string;
  imageUrl: string;
}

export default function MemberCard({ name, yearSection, imageUrl }: MemberCardProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      {/* Circular Image Container - Responsive sizing */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-3 sm:mb-4 md:mb-6">
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-800 group-hover:border-[#ff3366] bg-gray-800 shadow-xl transition-all duration-300">
          <Image
            src={imageUrl || "/logo.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-full bg-[#ff3366] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
      </div>

      {/* Name, Year and Section Details */}
      <div className="space-y-1">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-[#ff3366] transition-colors">
          {name}
        </h3>
        {yearSection && (
          <p className="text-xs text-gray-500 font-medium uppercase tracking-[0.2em]">
            {yearSection}
          </p>
        )}
      </div>
    </div>
  );
}