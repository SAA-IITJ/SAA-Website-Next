import { PositionTypes, TeamMember, TeamMemberTypes } from "../types/Team.type";


const TeamMemberData: TeamMember[] = [
  {
    imagePath: "/media/profileImages/president_team.jpg",
    name: "Shankar Manoharan",
    position: 1,
    teamType: 1,
    phoneNumber: "7777777777",
    email: "shankarmanoharan@iitj.ac.in",
    instagramLink: "https://www.instagram.com/johndoe",
    linkedinLink: "https://www.linkedin.com/in/johndoe",
  },
  {
    imagePath: "/media/profileImages/tarak_team.jpg",
    name: "Tharakadatta Hegde",
    position: 2,
    teamType: 1,
    phoneNumber: "8792760150",
    email: "b22es007@iitj.ac.in",
    instagramLink: "https://www.instagram.com/johndoe",
    linkedinLink: "https://www.linkedin.com/in/johndoe",
  },
  {
    imagePath: "/media/profileImages/yuvraj_team.jpg",
    name: "Yuvraj Saran",
    position: 3,
    teamType: 1,
    phoneNumber: "8302668675",
    email: "b22me074@iitj.ac.in",
    instagramLink: "https://www.instagram.com/janesmith",
    linkedinLink: "https://www.linkedin.com/in/janesmith",
  },
  {
    imagePath: "/media/profileImages/adi_team.jpg",
    name: "Aditya Jha",
    position: 4,
    teamType: 4,
    phoneNumber: "5555555555",
    email: "alice@example.com",
    instagramLink: "https://www.instagram.com/alicejohnson",
    linkedinLink: "https://www.linkedin.com/in/alicejohnson",
  },
  {
    imagePath: "/media/profileImages/tanmay_team.jpg",
    name: "Tanmay Daga",
    position: 4,
    teamType: 4,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/prakhar_team.jpg",
    name: "Prakhar Goyal",
    position: 4,
    teamType: 3,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/pragati_team.jpg",
    name: "Pragati Khandelwal",
    position: 4,
    teamType: 3,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/nitish_team.jpg",
    name: "Nitish Gupta",
    position: 4,
    teamType: 5,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/sahil_team.jpg",
    name: "Sahilpreet Singh",
    position: 4,
    teamType: 5,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/raghuveer_team.jpg",
    name: "Raghuveer Kulkarni",
    position: 4,
    teamType: 5,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/nayan_team.jpg",
    name: "Nayan Kute",
    position: 4,
    teamType: 7,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/abhishek_team.jpg",
    name: "Abhishek Garg",
    position: 4,
    teamType: 7,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/rudra_team.jpg",
    name: "Rudra Khokhani",
    position: 4,
    teamType: 6,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/tanvi_team.jpg",
    name: "Uttla Tanvi Kumari",
    position: 4,
    teamType: 6,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/mahi_team.jpg",
    name: "Mahi Chouhan",
    position: 4,
    teamType: 2,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  // core members
  {
    imagePath: "/media/profileImages/sonawane_team.jpg",
    name: "Aditya Sonawane",
    position: 5,
    teamType: 2,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/amee_team.png",
    name: "Amee Ghai",
    position: 5,
    teamType: 2,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/ameen.jpg",
    name: "Ameen Rehman",
    position: 5,
    teamType: 2,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/arush_team.jpg",
    name: "Arush Aaron John",
    position: 5,
    teamType: 2,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/aurindum_team.JPG",
    name: "Aurindum Banerjee",
    position: 5,
    teamType: 2,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/danie.jpg",
    name: "Danie George John",
    position: 5,
    teamType: 2,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/ektedar_team.jpg",
    name: "Ektedar Ahmad",
    position: 5,
    teamType: 2,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/ishan_team.jpg",
    name: "Ishan Rajpurohit",
    position: 5,
    teamType: 2,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/sahoo_team.jpg",
    name: "Patitapaban Sahoo",
    position: 5,
    teamType: 2,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/prayag_team.JPG",
    name: "Prayag R",
    position: 5,
    teamType: 2,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/saher.jpg",
    name: "Saher Dev",
    position: 5,
    teamType: 2,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/shubham_team.jpg",
    name: "Subham Agrawal",
    position: 5,
    teamType: 2,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/tanisha_team.jpg",
    name: "Tanisha Saini",
    position: 5,
    teamType: 2,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
  {
    imagePath: "/media/profileImages/vyom_team.jpg",
    name: "Vyom Shah",
    position: 5,
    teamType: 2,
    phoneNumber: "7777777777",
    email: "bob@example.com",
    instagramLink: "https://www.instagram.com/bobbrown",
    linkedinLink: "https://www.linkedin.com/in/bobbrown",
  },
];

export const TEAM_PAGE_POSITION_TYPES: PositionTypes = {
  1: "President",
  2: "Vice President",
  3: "Overall Coordinators",
  4: "Coordinators",
  5: "Team Members",
};

export const TEAM_PAGE_TEAM_TYPES: TeamMemberTypes = {
  1: "Super",
  2: "Design",
  3: "Content",
  4: "Tech",
  5: "Events",
  6: "Media",
  7: "Alumni Mentorship Programme",
};
