import Image from "next/image";

interface OfficersCardProps {
  name: string;
  position: string;
  imageUrl: string;
}

export default function OfficersCard({ name, position, imageUrl }: OfficersCardProps) {
  return (
    <div className="bg-[#FFFFFF] rounded-3xl p-8 flex flex-col items-center text-center shadow-lg transition-transform hover:scale-105">
      <div className="relative w-48 h-48 md:w-56 md:h-56 mb-6">
        {/* Changed border-radius-50% to rounded-full */}
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-100 relative">
          <Image
            src={imageUrl || "/logo.svg"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-[#000000] tracking-tight">
          {name}
        </h3>
        <p className="text-[#292929] font-light text-lg">
          {position}
        </p>
      </div>
    </div>
  );
}