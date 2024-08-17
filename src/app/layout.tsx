import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav";
import { navLinks } from "./data/navlinks";
import Footer from "./components/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAA Website",
  description: "Official website for the Society of Alumni Affairs, IIT Jodhpur",
  authors: [
    { name: "SAA Core Team" },
    { name: "Society of Alumni Affairs" },
    { name: "Vice President SAA" },
    { name: "Tharakadatta Hegde" },
    { name: "Yuvraj Saran" },
    { name: "Tanmay Daga" },
    { name: "Adithya Jha" },
    { name: "Danie George John", url: "https://www.linkedin.com/in/daniegeorgejohn/" },
    { name: "Raghuveer Kulkarni" },
  ],
  keywords: [
    "SAA IITJ", "Society of Alumni Affairs", "Society of Alumni Affairs IIT Jodhpur",
    "IIT Jodhpur", "IIT Rajasthan", "IITJ", "SAA", "IIT", "Indian Institute of Technology Jodhpur"
  ],
  icons: "/saa_logo_png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "image": "https://media.licdn.com/dms/image/v2/C4D0BAQEeAR8xrKduig/company-logo_200_200/company-logo_200_200/0/1658770937578?e=2147483647&v=beta&t=_a8wQxMAOETqjMDdczTjox1gdOfpWd0baN0k8T9Q0j4",
              "url": "https://www.saa.iitj.ac.in",
              "logo": "https://media.licdn.com/dms/image/v2/C4D0BAQEeAR8xrKduig/company-logo_200_200/company-logo_200_200/0/1658770937578?e=2147483647&v=beta&t=_a8wQxMAOETqjMDdczTjox1gdOfpWd0baN0k8T9Q0j4",
              "name": "SAA IITJ",
              "description": "Society of Alumni Affairs IIT Jodhpur",
              "email": "saa@iitj.ac.in",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Indian Institute of Technology Jodhpur",
                "addressLocality": "Karwar",
                "addressCountry": "IN",
                "addressRegion": "Rajasthan",
                "postalCode": "342037"
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <NavBar navLinks={navLinks} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
