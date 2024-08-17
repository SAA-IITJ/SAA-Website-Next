import React from "react";
import TeamSection from "@/app/team/components/TeamSection";
import { TeamMember as TeamMemberType } from "@/app/types/Team.type";
import TeamMember from "@/app/team/components/TeamMemberCard";
import TeamMemberData from "@/app/data/teamMembers";

const Page: React.FC = () => {
    const vicePresident = TeamMemberData.find(member => member.position === 1); // Assuming 1 is for VP

    return (
        <>
          <section className="bg-gray-100 dark:bg-gray-100">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
              <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">

                                {/* Displaying VP */}
                
                <div data-aos="fade-up"
                data-aos-duration="3000">
                {vicePresident && (
                  <>
                  
                    <div className="flex items-center justify-center mt-6 mb-16">
                      <div className="w-48 h-0.5 bg-gray-500"></div>
                      <h2 className="text-black text-2xl font-bold mx-4">PRESIDENT</h2>
                      <div className="w-48 h-0.5 bg-gray-500"></div>
                    </div>
                    
                    <TeamMember {...vicePresident} />
                  </>
                )}
                </div>

                <div className="delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300">
                  <div className="duration-[1000ms] [animation-iteration-count:infinite] taos:opacity-0">
                    <p className="mt-20 font-light text-gray-500 sm:text-xl dark:text-gray-800">
                      <i>Building Bridges and Strengthening Bonds: Enhancing Alumni Collaboration Through Teamwork and Engagement</i>
                    </p>
                  </div>
                </div>
    
                {/* Displaying VP */}
                
              </div>    
            </div>
          </section>
        </>
      );
    };
    
    export default Page;
    