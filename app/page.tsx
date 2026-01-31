import Image from "next/image";
import { Header } from "@/components/header";
import EventCard from '@/components/performances-card';
import OfficersCard from '@/components/officers-card';
import { sql } from '@vercel/postgres';

async function getVideos() {
  try {
    const { rows } = await sql`
      SELECT * FROM videos 
      ORDER BY sheet_id DESC
      LIMIT 4
    `;
    return rows;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
}

async function getFeaturedOfficers() {
  try {
    const { rows } = await sql`
      SELECT id, name, position, image 
      FROM officers 
      ORDER BY id ASC
      LIMIT 4
    `;
    return rows;
  } catch (error) {
    console.error('Error fetching featured officers:', error);
    return [];
  }
}

export default async function Home() {
  const videos = await getVideos();
  const officers = await getFeaturedOfficers();

  return (
    <div className="gradient-bg min-h-screen text-white">
      <Header />
      
      {/* Hero Section - Optimized for mobile */}
      <div className="relative -mt-[72px] overflow-hidden">
        <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
          <Image
            src="/banner1.svg"
            alt="D.N.A. Banner"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </div>
        
        {/* Hero Text - Responsive positioning */}
        <div className="absolute inset-0 flex items-end pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-4 leading-tight">
              DANCING NURSES<br />ASSOCIATION
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-white/90 mb-4 sm:mb-6 md:mb-8">
              Central Philippine University - College of Nursing
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light italic text-[#00ff88]">
              "One blood, One gene."
            </p>
          </div>
        </div>
      </div>
      
      {/* PERFORMANCES SECTION */}
      <div className="container-custom py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mb-8 sm:mb-10 md:mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-2 sm:mb-3">Performances</h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl">A wide range of performances made by the organization.</p>
        </div>
        
        {/* Responsive grid - 1 col mobile, 2 col tablet, 3-4 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 stagger-children">
          {videos.map((video) => (
            <EventCard
              key={video.id}
              imageUrl={video.image || "/banner1.svg"}
              imageAlt={`${video.title} event`}
              title={video.title}
              choreographers={video.choreographers || "N/A"}
              status={video.type || "Event"}
              link={video.link}
            />
          ))}
        </div>
        
        {videos.length === 0 && (
          <div className="text-center py-16 sm:py-20">
            <p className="text-gray-500 text-base sm:text-lg">No events found.</p>
          </div>
        )}
      </div>

      <hr className="border-white/10 mx-4 sm:mx-8" />

      {/* MEMBERS SECTION */}
      <div className="container-custom py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mb-8 sm:mb-10 md:mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-2 sm:mb-3">Members</h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl">The official members of the Dancing Nurses Association.</p>
        </div>

        {/* Responsive grid for officers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 sm:gap-8 stagger-children">
          {officers.map((officer) => (
            <OfficersCard
              key={officer.id}
              name={officer.name}
              position={officer.position}
              imageUrl={officer.image}
            />
          ))}
        </div>
      </div>

      <hr className="border-white/10 mx-4 sm:mx-8" />

      {/* ABOUT US SECTION */}
      <div className="container-custom py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mb-10 sm:mb-12 md:mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-2 sm:mb-3">About Us</h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl">Introducing the Dancing Nurses Association.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 stagger-children">
          {/* Mission Section */}
          <div className="space-y-4 sm:space-y-6 bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 hover:border-[#00ff88] transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-center text-[#00ff88]">Mission</h3>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed text-center">
              Our mission is to cultivate a community of student nurses who find renewal, balance, 
              and creative fulfillment through dance. We are committed to fostering excellence, 
              discipline, and artistic integrity, while nurturing the emotional and mental 
              well-being of our members.
            </p>
          </div>

          {/* Vision Section */}
          <div className="space-y-4 sm:space-y-6 bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 hover:border-[#00ff88] transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-center text-[#00ff88]">Vision</h3>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed text-center">
              We envision a community where dance serves as a universal language and a restorative 
              space, particularly for student nurses who navigate the rigors of academic and 
              clinical responsibilities. Our dance group aspires to be a guiding light, demonstrating 
              how artistic expression can inspire, unite, and provide solace.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 sm:py-12 text-center">
        <div className="container-custom">
          <p className="text-gray-500 text-sm sm:text-base">
            © {new Date().getFullYear()} Dancing Nurses Association. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}