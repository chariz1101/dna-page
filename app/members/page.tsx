import Image from "next/image";
import { Header } from "@/components/header";
import OfficersCard from "@/components/officers-card";
import MemberCard from "@/components/members-card";
import { sql } from '@vercel/postgres';

async function getOfficers() {
  try {
    // Corrected ordering to match your 'id' column
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

  // Filtering based on the 'position' column in your sheet
  const advisers = officers.filter(o => o.position?.toLowerCase().includes('adviser'));
  const executiveBoard = officers.filter(o => !o.position?.toLowerCase().includes('adviser'));

  return (
    <div className="bg-[#121212] min-h-screen text-white pb-20">
      <Header />

      <main className="container mx-auto px-8 pt-12 space-y-24">
        
        {/* OFFICERS SECTION - 4 per row */}
        <section>
          <div className="mb-10">
            <h1 className="text-4xl font-bold uppercase tracking-widest text-white">Officers</h1>
            <p className="text-[#B4B4B4] text-xl mt-2">The governing officers of the organization.</p>
          </div>   

          {/* Executive Board Sub-section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {executiveBoard.map((officer) => (
              <OfficersCard
                key={officer.id}
                name={officer.name}
                position={officer.position}
                imageUrl={officer.image}
              />
            ))}
          </div>

          {/* Advisers Sub-section - Positioned under Officers */}
          {advisers.length > 0 && (
            <div className="mt-24 border-t border-white/5 pt-16">
              <h2 className="text-xl font-medium text-gray-500 uppercase tracking-[0.3em] mb-12 opacity-60 text-center lg:text-left">
                Organization Advisers
              </h2>
              <div className="flex flex-wrap gap-12 justify-center lg:justify-start">
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

        {/* MEMBERS SECTION - 5 per row */}
        <section>
          <div className="mb-10">
            <h1 className="text-4xl font-bold uppercase tracking-widest text-white">Members</h1>
            <p className="text-[#B4B4B4] text-xl mt-2">The current members of the organization.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
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
        <section>
          <div className="mb-10">
            <h1 className="text-4xl font-bold uppercase tracking-widest text-white">Alumni</h1>
            <p className="text-[#B4B4B4] text-xl mt-2">Previous members of the organization.</p>
          </div>
          <div className="flex justify-center py-20 border border-dashed border-white/5 rounded-3xl">
            <p className="text-gray-600 font-light tracking-[0.3em] uppercase">No alumni records found.</p>
          </div>
        </section>

      </main>
    </div>
  );
  
async function getOfficers() {
  try {
    // Alias hyphenated column to match component props
    const { rows } = await sql`
      SELECT 
        id, 
        name, 
        position, 
        image, 
        "year-and-section" AS "yearSection" 
      FROM officers 
      ORDER BY id ASC
    `;
    return rows;
  } catch (error) {
    console.error('Error fetching officers:', error);
    return [];
  }
}

async function getMembers() {
  try {
    // Alias hyphenated column to match component props
    const { rows } = await sql`
      SELECT 
        id, 
        name, 
        image, 
        "year-and-section" AS "yearSection" 
      FROM members 
      ORDER BY name ASC
    `;
    return rows;
  } catch (error) {
    console.error('Error fetching members:', error);
    return [];
  }
}
}