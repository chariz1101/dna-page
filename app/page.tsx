import Image from "next/image";
import { Header } from "@/components/header";
import EventCard from '@/components/performances-card';
import OfficersCard from '@/components/officers-card'; // Added for Members section
import { sql } from '@vercel/postgres';

async function getVideos() {
  try {
    const { rows } = await sql`
      SELECT * FROM videos 
      ORDER BY sheet_id DESC
      LIMIT 5
    `;
    return rows;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
}

async function getFeaturedOfficers() {
  try {
    // Fetch the first 5 officers for the landing page
    const { rows } = await sql`
      SELECT id, name, position, image 
      FROM officers 
      ORDER BY id ASC
      LIMIT 5
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
    <div className="bg-[#0a0a0a] min-h-screen text-white pb-20">
      <Header />
      
      {/* Hero Section - Unchanged */}
      <div className="relative -mt-[72px]">
        <Image
          src="/banner1.svg"
          alt="D.N.A. Banner"
          width={1920}
          height={600}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 top-60 left-10">
          <h1 className="text-6xl font-bold text-white">
            DANCING NURSES ASSOCIATION
          </h1>
          <a className="text-4xl font-light text-white mt-2 block">
            Central Philippine University - College of Nursing
          </a>
          <a className="text-5xl font-light italic text-white mt-30 ml-30 block">
            "One blood,
          </a>
          <a className="text-5xl font-light italic text-white ml-40 block">
            One gene."
          </a>
        </div>
      </div>
      
      {/* PERFORMANCES SECTION */}
      <div className="container mx-auto px-8 py-16">
        <div className="mb-10">
          <h2 className="text-4xl font-bold uppercase">Performances</h2>
          <p className="text-[#B4B4B4] text-xl">A wide range of performances made by the organization.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
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
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No events found.</p>
          </div>
        )}
      </div>

      <hr className="border-white/10 mx-8" />

      {/* MEMBERS SECTION - Using Officers first */}
      <div className="container mx-auto px-8 py-16">
        <div className="mb-10">
          <h2 className="text-4xl font-bold uppercase">Members</h2>
          <p className="text-[#B4B4B4] text-xl">The official members of the Dancing Nurses Association.</p>
        </div>

        {/* Strictly 5 columns as requested */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
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

      <hr className="border-white/10 mx-8" />

      {/* ABOUT US SECTION */}
      <div className="container mx-auto px-8 py-20">
        <div className="mb-16">
          <h2 className="text-4xl font-bold uppercase">About Us</h2>
          <p className="text-[#B4B4B4] text-xl">Introducing the Dancing Nurses Association.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Mission Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold uppercase text-center">Mission</h3>
            <p className="text-[#B4B4B4] text-xl leading-relaxed text-center">
              Our mission is to cultivate a community of student nurses who find renewal, balance, 
              and creative fulfillment through dance. We are committed to fostering excellence, 
              discipline, and artistic integrity, while nurturing the emotional and mental 
              well-being of our members.
            </p>
          </div>

          {/* Vision Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold uppercase text-center">Vision</h3>
            <p className="text-[#B4B4B4] text-xl leading-relaxed text-center">
              We envision a community where dance serves as a universal language and a restorative 
              space, particularly for student nurses who navigate the rigors of academic and 
              clinical responsibilities. Our dance group aspires to be a guiding light, demonstrating 
              how artistic expression can inspire, unite, and provide solace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}