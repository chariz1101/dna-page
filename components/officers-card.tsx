import Image from "next/image";

interface OfficersCardProps {
  name: string;
  position: string;
  imageUrl: string;
}

export default function OfficersCard({ name, position, imageUrl }: OfficersCardProps) {
  return (
    <div className="group bg-white rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#ff3366]">
      <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-4 sm:mb-6">
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-[#ff3366] transition-all duration-300 relative shadow-xl">
          <Image
            src={imageUrl || "/logo.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Decorative ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#ff3366] opacity-0 group-hover:opacity-100 scale-110 transition-all duration-300" />
      </div>
      <div className="space-y-1 sm:space-y-2">
        <h3 className="text-lg sm:text-xl font-bold text-[#000000] tracking-tight group-hover:text-[#ff3366] transition-colors">
          {name}
        </h3>
        <p className="text-[#292929] font-normal text-sm sm:text-base uppercase tracking-wider">
          {position}
        </p>
      </div>
    </div>
  );
}