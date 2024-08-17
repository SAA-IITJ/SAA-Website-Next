import React from "react";
import TeamSection from "@/app/team/components/TeamSection";
import { TeamMember as TeamMemberType } from "@/app/types/Team.type";
import TeamMember from "@/app/team/components/TeamMemberCard";
import TeamMemberData from "@/app/data/teamMembers";

const Page: React.FC = () => {
  const vicePresident = TeamMemberData.find(member => member.position === 2); // Assuming 1 is for VP
  const overallCoordinators = TeamMemberData.filter(member => member.position === 3); // Assuming 2 is for Overall Coordinators
  const coordinators = TeamMemberData.filter(member => ![1, 2, 3, 5].includes(member.position)); // Exclude VP and Overall Coordinators
  const coreMembers = TeamMemberData.filter(member => member.position === 5); // Assuming 3 is for Core Members

  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-100">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <div className="delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300">
              <div className="duration-[1000ms] [animation-iteration-count:infinite] taos:opacity-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
                  Our Team
                </h2>
                <p className="mb-20 font-light text-gray-500 sm:text-xl dark:text-gray-800">
                Fostering Connections and Fortifying Ties: Elevating Alumni Cooperation through Collaboration and Active Engagement.
                </p>
              </div>
            </div>

            {/* Displaying VP */}
            
            <div data-aos="fade-up"
            data-aos-duration="3000">
            {vicePresident && (
              <>
              
                <div className="flex items-center justify-center mt-6 mb-16">
                  <div className="w-48 h-0.5 bg-gray-500"></div>
                  <h2 className="text-black text-2xl font-bold mx-4">VICE PRESIDENT</h2>
                  <div className="w-48 h-0.5 bg-gray-500"></div>
                </div>
                
                <TeamMember {...vicePresident} />
              </>
            )}
            </div>
          </div>

          {/* Displaying Overall Coordinators */}
          <div data-aos="fade-up"
            data-aos-duration="3000">
          
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-black text-2xl font-bold mx-4">OVERALL COORDINATORS</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            {overallCoordinators.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
          </div>

          {/* Displaying Coordinators */}
          <div className="flex items-center justify-center mt-6 mb-16">
            <div className="w-48 h-0.5 bg-gray-500"></div>
            <h2 className="text-black text-2xl font-bold mx-4">COORDINATORS</h2>
            <div className="w-48 h-0.5 bg-gray-500"></div>
          </div>
          <TeamSection title="Coordinators" members={coordinators} />

          {/* Displaying Core Members */}
          <div className="flex items-center justify-center mb-16">
            <div className="w-56 h-0.5 bg-gray-500"></div>
            <h2 className="text-black text-2xl font-bold mx-4">CORE MEMBERS</h2>
            <div className="w-56 h-0.5 bg-gray-500"></div>
          </div>
          <TeamSection title="Core Members" members={coreMembers} />
        </div>
      </section>
    </>
  );
};

export default Page;
