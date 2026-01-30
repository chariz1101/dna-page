import { Header } from "@/components/header";
import OfficersCard from "@/components/officers-card";
import MemberCard from "@/components/members-card";
import { sql } from '@vercel/postgres';

async function getOfficers() {
  try {
    const { rows } = await sql`SELECT * FROM officers ORDER BY id ASC`;
    return rows;
  } catch (error) {
    console.error('Error fetching officers:', error);
    return [];
  }
}

async function getMembers() {
  try {
    const { rows } = await sql`SELECT * FROM members ORDER BY name ASC`;
    return rows;
  } catch (error) {
    console.error('Error fetching members:', error);
    return [];
  }
}

export default async function MembersPage() {
  const [officers, members] = await Promise.all([getOfficers(), getMembers()]);

  const advisers = officers.filter(o => o.position?.toLowerCase().includes('adviser'));
  const executiveBoard = officers.filter(o => !o.position?.toLowerCase().includes('adviser'));

  return (
    <div className="bg-black min-h-screen text-white pb-16 sm:pb-24 grid-bg">
      <Header />

      <main className="container-custom pt-12 sm:pt-16 space-y-20 sm:space-y-28 md:space-y-32">
        
        {/* OFFICERS SECTION */}
        <section className="fade-in">
          <div className="mb-10 sm:mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-3 bg-[#00ff88] rounded-full glow-accent" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">Officers</h1>
            </div>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl ml-7 uppercase tracking-[0.15em] font-light">
              Leadership Team
            </p>
          </div>   

          {/* Executive Board */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 stagger-children">
            {executiveBoard.map((officer) => (
              <OfficersCard
                key={officer.id}
                name={officer.name}
                position={officer.position}
                imageUrl={officer.image}
              />
            ))}
          </div>

          {/* Advisers */}
          {advisers.length > 0 && (
            <div className="mt-20 sm:mt-24 md:mt-28 pt-16 sm:pt-20 border-t border-white/5">
              <div className="flex items-center gap-3 mb-10 sm:mb-12">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-medium text-gray-600 uppercase tracking-[0.2em]">
                  Organization Advisers
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                {advisers.map((adviser) => (
                  <OfficersCard
                    key={adviser.id}
                    name={adviser.name}
                    position={adviser.position}
                    imageUrl={adviser.image}
                  />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* MEMBERS SECTION */}
        <section className="fade-in">
          <div className="mb-10 sm:mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-3 bg-[#00ff88] rounded-full glow-accent" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">Members</h1>
            </div>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl ml-7 uppercase tracking-[0.15em] font-light">
              Active Members
            </p>
          </div>
          
          {/* Members Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 stagger-children">
            {members.map((member) => (
              <MemberCard
                key={member.id}
                name={member.name}
                yearSection={member['year-and-section']}
                imageUrl={member.image}
              />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* ALUMNI SECTION */}
        <section className="fade-in">
          <div className="mb-10 sm:mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-3 bg-[#00ff88] rounded-full glow-accent" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">Alumni</h1>
            </div>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl ml-7 uppercase tracking-[0.15em] font-light">
              Past Members
            </p>
          </div>
          
          <div className="flex justify-center py-20 sm:py-28 border border-dashed border-white/5 rounded-2xl bg-[#0a0a0a]">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 border-2 border-white/10 rounded-full flex items-center justify-center">
                <svg 
                  className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <p className="text-gray-600 font-light tracking-[0.2em] uppercase text-sm sm:text-base">
                No alumni records found
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 sm:py-12 mt-20 sm:mt-28">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} D.N.A.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-[1px] bg-[#00ff88]" />
              <p className="text-gray-600 text-xs uppercase tracking-widest">Dancing Nurses Association</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}