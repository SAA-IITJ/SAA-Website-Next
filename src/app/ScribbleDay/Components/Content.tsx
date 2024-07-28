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
      heading: "About Scribble Day",
      content: "On Scribble Day, a special tradition for the graduating batch of IIT Jodhpur, students celebrate their final days on campus with a unique and memorable activity. Each graduating student receives a T-shirt and is given the opportunity to leave their mark by writing messages, signatures, and drawings on their peers' shirts.",
    },
    {
      imgUrl: "https://via.placeholder.com/300",
      heading: "The Significance",
      content: "Scribble Day is more than just a fun activity; it’s a way for students to reflect on their time at IIT Jodhpur and to create a tangible reminder of their experiences. It fosters a sense of unity and nostalgia, as students celebrate their accomplishments and the bonds they’ve built over the years. The event highlights the camaraderie and spirit of the graduating class, marking a memorable end to their academic journey.",
      reverse: true,
    },
    {
      imgUrl: "https://via.placeholder.com/300",
      heading: "Forming Memories Lifelong",
      content: "This event becomes a canvas for personal expression and creativity. Students scribble heartfelt notes, inside jokes, and drawings that capture their shared experiences and friendships formed during their time at IIT Jodhpur. The T-shirts become cherished keepsakes, serving as lasting mementos of their college journey.",
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
