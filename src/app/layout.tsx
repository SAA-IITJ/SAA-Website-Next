import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav";
import { navLinks } from "./data/navlinks";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAA Website",
  description: "Offical website for the Society of Alumni Affairs, IIT Jodhpur",
  authors:[
    {name:"SAA Core Team"},
    {name:"Society of Alumni Affairs"},
    {name:"Vice President SAA"},
    {name:"Tharakadatta Hegde"},
    {name:"Yuvraj Saran"},
    {name:"Tanmay Daga"},
    {name:"Adithya Jha"},
    {name:"Danie George John" , url:"https://www.linkedin.com/in/daniegeorgejohn/"},
    {name:"Raghuveer Kulkarni"}
  ],
  keywords:["SAA IITJ","Society of Alumni Affairs","Society of Alumni Affairs IIT Jodhpur","IIT Jodhpur","IIT Rajasthan","IITJ","SAA","IIT","Indian Institute of Technology Jodhpur"],
  icons:"/saa_logo_png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar navLinks={navLinks} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
