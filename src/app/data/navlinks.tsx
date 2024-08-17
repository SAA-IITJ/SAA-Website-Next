// data/navLinks.ts

import { NavLinks, SimpleLink, DropdownLink } from "@/app/types/Navlinks.type";

export const navLinks: NavLinks = {
  home: {
    text: "Home",
    url: "/home.html",
  },
  team: {
    text: "Team",
    subLinks: [
      { text: "Faculty Advisor", url: "/team/faculty.html" },
      { text: "Student Team", url: "/team/student.html" },
    ],
  },
  activities: {
    text: "Events",
    url: "/events.html",
  },
  visit_IITJ: {
    text: "Visit IITJ",
    url: "/visitIITJ.html",
  },
  quick_access: {
    text: "Quick Access",
    subLinks: [
      { text: "IIT Jodhpur", url: "https://www.iitj.ac.in/" },
      { text: "Alumni Portal", url: "https://alumni.iitj.ac.in/" },
    ],
  },
};
