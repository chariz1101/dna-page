import Image from "next/image";

interface MemberCardProps {
  name: string;
  yearSection?: string;
  imageUrl: string;
}

export default function MemberCard({ name, yearSection, imageUrl }: MemberCardProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      {/* Circular Image Container */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6 transition-transform duration-300 group-hover:scale-105">
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gray-800 shadow-xl">
          <Image
            src={imageUrl || "/logo.svg"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Name, Year and Section Details */}
      <div className="space-y-1">
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          {name}
        </h3>
        {yearSection && (
          <p className="text-xs text-gray-500 font-medium uppercase tracking-[0.2em] mt-2">
            Section {yearSection}
          </p>
        )}
      </div>
    </div>
  );
}