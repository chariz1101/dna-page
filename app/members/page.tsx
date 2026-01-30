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
    <div className="gradient-bg min-h-screen text-white pb-12 sm:pb-20">
      <Header />

      <main className="container-custom pt-8 sm:pt-12 space-y-16 sm:space-y-20 md:space-y-24">
        
        {/* OFFICERS SECTION */}
        <section className="fade-in">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-white mb-2 sm:mb-3">Officers</h1>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl">The governing officers of the organization.</p>
          </div>   

          {/* Executive Board - Responsive grid */}
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

          {/* Advisers Sub-section */}
          {advisers.length > 0 && (
            <div className="mt-16 sm:mt-20 md:mt-24 border-t border-white/10 pt-12 sm:pt-16">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-500 uppercase tracking-[0.3em] mb-8 sm:mb-12 opacity-60 text-center lg:text-left">
                Organization Advisers
              </h2>
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

        <hr className="border-white/10" />

        {/* MEMBERS SECTION */}
        <section className="fade-in">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-white mb-2 sm:mb-3">Members</h1>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl">The current members of the organization.</p>
          </div>
          
          {/* Responsive member grid - more compact on mobile */}
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

        <hr className="border-white/10" />

        {/* ALUMNI SECTION */}
        <section className="fade-in">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-white mb-2 sm:mb-3">Alumni</h1>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl">Previous members of the organization.</p>
          </div>
          <div className="flex justify-center py-16 sm:py-20 border-2 border-dashed border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
            <div className="text-center">
              <svg 
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <p className="text-gray-600 font-light tracking-[0.3em] uppercase text-sm sm:text-base">No alumni records found.</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 sm:py-12 text-center mt-12 sm:mt-16">
        <div className="container-custom">
          <p className="text-gray-500 text-sm sm:text-base">
            © {new Date().getFullYear()} Dancing Nurses Association. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}