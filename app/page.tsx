import Image from "next/image";
import Link from "next/link";
import { sql } from '@vercel/postgres';
import { Header } from "@/components/header";
import EventCard from '@/components/performances-card';
import OfficersCard from '@/components/officers-card';
import MerchCard from '@/components/merch-card'; 

// Static Data
const featuredMerch = [
  {
    id: 1,
    title: "Sleek Black and Crisp White Tee",
    variations: "Black, White",
    link: "https://www.facebook.com/cpucondna/posts/pfbid02BrsbMvTDihKXCBYPfriLfn3tNWoscBPdG5Y3xNukuKv7EsSs6NJhD4ysAakPbq5Xl",
    image: "https://scontent.fceb6-4.fna.fbcdn.net/v/t39.30808-6/495000968_699660745951261_5380665596613515298_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG9hEjur0QszySkDj3OfeF4SFv9apwqb_9IW_1qnCpv_zRnWynwxcvQfxa97QKkqfVzrgN89qpshSnNJa6MdZhZ&_nc_ohc=o0DCoP-lJn8Q7kNvwG9hRza&_nc_oc=AdlH1TDjz62K7lNxogPWtmYQ33VJgiMoZciRxmx9ruxDEr3_3tn4Mp5ZZIHru5uolow&_nc_zt=23&_nc_ht=scontent.fceb6-4.fna&_nc_gid=mzHIEKlr1NQ4Tef1OpyTUQ&oh=00_AftISU4j4a6cvcgDKPdWVzOlefyKZBwQp3HRYLwR4NRr6Q&oe=698FF229" 
  },
  {
    id: 2,
    title: "Rock your D.N.A Shirt",
    variations: "Black, White",
    link: "https://www.facebook.com/cpucondna/posts/pfbid02sQ4p4JjjnNzP89ke4cs5XcvXrhHfJj4KsZySZEDu1H4oH8Yt7ciGBVhUhGAhNd78l",
    image: "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/484860773_666764385907564_7255658188100181093_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGCC_-afx1L5QUR_NRgb7ZUT6ViHL8nCaNPpWIcvycJozD79lx3khOfPXX2fM1TUNmlAjgXs27S9KlgGf59gdG3&_nc_ohc=YDcAzuCwy6EQ7kNvwFqazeD&_nc_oc=AdkIc8jeFwsFB5X5ovAl9tYcbqk3mdohggSgOYg1OAf60UrJjsw08SPyIASOsQUPckQ&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=qGd4Bf4gA53ozT_cHHamHw&oh=00_AfsTcspsRCfAO0x2tMv0yxlxsZf8JLCVd4Qh7I8iGTDQaQ&oe=698FF8CD"
  },
];

async function getVideos() {
  try {
    const { rows } = await sql`SELECT * FROM videos ORDER BY sheet_id DESC LIMIT 4`;
    return rows;
  } catch (error) { return []; }
}

async function getFeaturedOfficers() {
  try {
    const { rows } = await sql`SELECT id, name, position, image FROM officers ORDER BY id ASC LIMIT 4`;
    return rows;
  } catch (error) { return []; }
}

export default async function Home() {
  const videos = await getVideos();
  const officers = await getFeaturedOfficers();

  return (
    <div className="gradient-bg min-h-screen text-white">
      <Header />
      
      {/* Hero */}
      <div className="relative -mt-[72px] overflow-hidden">
        <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
          <Image src="/banner1.svg" alt="Banner" fill className="object-cover object-center" priority />
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
              imageUrl={video.image || "/banner1.svg"}
              imageAlt={`${video.title} event`}
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

      {/* Merch */}
      <div className="container-custom py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mb-8 sm:mb-10 md:mb-12 fade-in flex justify-between items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-2 sm:mb-3">Merch</h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl">Support with official gear.</p>
          </div>
          <Link href="/merch" className="hidden sm:block text-[#00ff88] uppercase tracking-widest text-sm hover:underline hover:text-white transition-colors">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 stagger-children">
          {featuredMerch.map((item) => (
            <MerchCard key={item.id} {...item} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
            <Link href="/merch" className="inline-block px-6 py-2 border border-[#00ff88] text-[#00ff88] text-sm font-bold uppercase tracking-widest rounded-full">
              View All Collection
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
    </div>
  );
}