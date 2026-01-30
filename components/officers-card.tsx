import Image from "next/image";

interface OfficersCardProps {
  name: string;
  position: string;
  imageUrl: string;
}

export default function OfficersCard({ name, position, imageUrl }: OfficersCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center border border-gray-200 hover:border-[#00ff88] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] transform hover:-translate-y-1">
      <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-4 sm:mb-6">
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-[#00ff88] transition-all duration-500 relative shadow-xl grayscale group-hover:grayscale-0">
          <Image
            src={imageUrl || "/logo.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
             style={{ boxShadow: '0 0 30px rgba(0, 255, 136, 0.3)' }} />
      </div>
      <div className="space-y-1 sm:space-y-2">
        <h3 className="text-lg sm:text-xl font-bold text-[#000000] tracking-tight group-hover:text-[#00ff88] transition-colors duration-300 uppercase">
          {name}
        </h3>
        <p className="text-[#666666] font-normal text-sm sm:text-base uppercase tracking-[0.15em]">
          {position}
        </p>
      </div>
    </div>
  );
}