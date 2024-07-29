import React from "react";
import TeamMember from "./TeamMemberCard";
import { TeamMember as TeamMemberType } from "@/app/types/Team.type";

interface TeamSectionProps {
  title: string;
  members: TeamMemberType[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, members }) => {
  return (
    <section className="container mx-auto p-8">
      {/* <div className="flex items-center justify-center mt-6 mb-16"> */}
        {/* <div className="w-48 h-0.5 bg-gray-500"></div> */}
        {/* <h2 className="text-black text-2xl font-bold mx-4">{title}</h2> */}
        {/* <div className="w-48 h-0.5 bg-gray-500"></div> */}
      {/* </div> */}
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {members.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
