import React from "react";

interface ContentSectionProps {
  imgUrl: string;
  heading: string;
  content: string;
  reverse?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  imgUrl,
  heading,
  content,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center my-8 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2 flex justify-center">
        <img
          src={imgUrl}
          alt={heading}
          className="rounded-lg shadow-lg max-w-xs w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 p-4 text-center md:text-left">
        <h2 className="text-xl font-bold mb-2">{heading}</h2>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export const AlternateSidesPage: React.FC = () => {
  const sections = [
    {
      imgUrl: "https://via.placeholder.com/300",
      heading: "About Dashak",
      content: "Welcome to Dashak, the prestigious 10-yearly alumni meetup for IIT Jodhpur! Dashak is more than just a reunion; it's a celebration of the enduring bonds, shared memories, and remarkable journeys of the IIT Jodhpur community. Every decade, alumni from across the globe gather to reconnect, reflect, and reignite the spirit that defined their transformative years at IIT Jodhpur.",
    },
    {
      imgUrl: "https://via.placeholder.com/300",
      heading: "The Events",
      content: "Graduates gather to share their memories, reconnecting with old friends and making new connections. The atmosphere is filled with joy and nostalgia as they reminisce about their time at IIT Jodhpur. Alumni take a trip down memory lane, visiting familiar spots on campus, from classrooms to hostels. They see how the campus has evolved while reliving the moments that shaped their college years. Interacting with Current Students: Alumni engage with current students, sharing their experiences and offering guidance. These interactions inspire and motivate the new generation, bridging the gap between past and present.",
      reverse: true,
    },
    {
      imgUrl: "https://via.placeholder.com/300",
      heading: "The Alumni Importance",
      content: "Alumni play a vital role in the growth and success of educational institutions. Their contributions extend far beyond financial donations, influencing various aspects of the institution and its community. One of the key ways alumni contribute is through mentorship and guidance. By sharing their professional experiences and career insights, alumni offer practical advice and support that helps current students navigate their future paths. This mentorship can cover everything from career advice to personal development, creating a supportive network for students.",
    },
    {
      imgUrl: "https://via.placeholder.com/300",
      heading: "Alumni Friendly Match",
      content: "At Dashak, the decadal alumni meetup, one of the highlights is the friendly football match between alumni and current students. This event fosters camaraderie and brings together generations of the IIT Jodhpur community. Alumni, who once played on the same fields as students, return to showcase their skills and share moments of fun and nostalgia. It’s a spirited game that strengthens connections and celebrates the enduring bonds within the community.",
      reverse: true,
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {sections.map((section, index) => (
        <ContentSection key={index} {...section} />
      ))}
    </div>
  );
};
