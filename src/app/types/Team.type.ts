interface TeamMember {
  imagePath: string;
  name: string;
  position: number;
  teamType: number;
  phoneNumber: string;
  email: string;
  instagramLink: string;
  linkedinLink: string;
}

interface PositionTypes {
  [key: number]: string;
}

interface TeamMemberTypes {
  [key: number]: string;
}

export type { TeamMember, PositionTypes, TeamMemberTypes };
