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
      heading: "The Graduated Batch",
      content: "The newly graduated alumni are truly special, marking the end of a significant chapter in their lives. Their journey through rigorous academics and personal growth has shaped them into individuals ready to make their mark on the world. As they step into the future, they carry with them the unique experiences and achievements that set them apart, embodying the spirit and excellence of their alma mater.",
    },
    {
      imgUrl: "https://via.placeholder.com/300",
      heading: "About Induction Dinner",
      content: "During the convocation, the graduated batch is honored with a special dinner hosted by the Director of IIT Jodhpur. This exclusive event provides a unique opportunity for the graduates to engage in meaningful conversations with the Director, reflect on their academic journey, and celebrate their achievements. It's a chance to strengthen their connection with the institution and mark the end of an important chapter in their lives.",
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
