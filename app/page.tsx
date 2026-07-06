import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import EventCard from '@/components/performances-card';
import OfficersCard from '@/components/officers-card';
import MerchCard from '@/components/merch-card'; 
import MerchPopup from '@/components/merch-popup';
import { neon } from '@neondatabase/serverless';
import { getCached } from '@/lib/redis';
import { Analytics } from "@vercel/analytics/next"

const sql = neon(process.env.DATABASE_URL!);

export const dynamic = 'force-dynamic';

async function getVideos() {
  try {
    return await getCached('home:videos', 60, async () => {
      return await sql`SELECT * FROM videos ORDER BY sheet_id DESC LIMIT 4`;
    });
  } catch (error) { return []; }
}

interface Officer {
  id: number;
  name: string;
  position: string;
  image: string | null;
}

async function getFeaturedOfficers(): Promise<Officer[]> {
  try {
    return await getCached('home:officers', 60, async () => {
      const rows = await sql`SELECT id, name, position, image FROM officers ORDER BY id ASC LIMIT 4` as Officer[];
      return rows.map(row => ({
        ...row,
        image: row.image ? `/images/officers/${row.image}` : null,
      }));
    });
  } catch (error) { return []; }
}

export default async function Home() {
  const videos = await getVideos();
  const officers = await getFeaturedOfficers();

  return (
    
    <div className="gradient-bg min-h-screen text-white">
      
      {/* Drops the popup over everything else */}
      {/* <MerchPopup /> */}

      <Header />
      
      {/* Hero */}
      <div className="relative -mt-[72px] overflow-hidden">
        <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
          <Image src="/banner.jpg" alt="Banner" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </div>
        <div className="absolute inset-0 flex items-end pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4 leading-tight">
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
      
      {/* Performances */}
      <div className="container-custom py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mb-8 sm:mb-10 md:mb-12 fade-in flex justify-between items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-2 sm:mb-3">Performances</h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl">A wide range of performances.</p>
          </div>
          <Link href="/performances" className="hidden sm:block text-[#00ff88] uppercase tracking-widest text-sm hover:underline hover:text-white transition-colors">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 stagger-children">
          {videos.map((video) => (
            <EventCard
              key={video.id}
              title={video.title}
              choreographers={video.choreographers || "N/A"}
              status={video.type || "Event"}
              link={video.link}
            />
          ))}
        </div>
        
        {videos.length === 0 && <div className="text-center py-16"><p className="text-gray-500">No events found.</p></div>}

        <div className="mt-8 text-center sm:hidden">
            <Link href="/performances" className="inline-block px-6 py-2 border border-[#00ff88] text-[#00ff88] text-sm font-bold uppercase tracking-widest rounded-full">
              View All Performances
            </Link>
        </div>
      </div>

      <hr className="border-white/10 mx-4 sm:mx-8" />

      {/* Members */}
      <div className="container-custom py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mb-8 sm:mb-10 md:mb-12 fade-in flex justify-between items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-2 sm:mb-3">Members</h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl">The official members of D.N.A.</p>
          </div>
          <Link href="/members" className="hidden sm:block text-[#00ff88] uppercase tracking-widest text-sm hover:underline hover:text-white transition-colors">
            View All →
          </Link>
        </div>

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

        <div className="mt-8 text-center sm:hidden">
            <Link href="/members" className="inline-block px-6 py-2 border border-[#00ff88] text-[#00ff88] text-sm font-bold uppercase tracking-widest rounded-full">
              View All Members
            </Link>
        </div>
      </div>

      <hr className="border-white/10 mx-4 sm:mx-8" />

      {/* About Us */}
      <div className="container-custom py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mb-10 sm:mb-12 md:mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-2 sm:mb-3">About Us</h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl">Introducing the Dancing Nurses Association.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 stagger-children">
          <div className="space-y-4 sm:space-y-6 bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 hover:border-[#00ff88] transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-center text-[#00ff88]">Mission</h3>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed text-center">
              Our mission is to cultivate a community of student nurses who find renewal, balance, 
              and creative fulfillment through dance. We are committed to fostering excellence, 
              discipline, and artistic integrity, while nurturing the emotional and mental 
              well-being of our members.
            </p>
          </div>

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
          <p className="text-gray-500 text-sm sm:text-base">© {new Date().getFullYear()} .charchives - All rights reserved</p>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}