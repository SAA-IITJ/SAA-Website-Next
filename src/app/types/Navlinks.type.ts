// types/NavLinks.ts

export interface SimpleLink {
  text: string;
  url: string;
}

export interface DropdownLink {
  text: string;
  subLinks: SimpleLink[];
}

export type NavLink = SimpleLink | DropdownLink;

export interface NavLinks {
  [key: string]: NavLink;
}
