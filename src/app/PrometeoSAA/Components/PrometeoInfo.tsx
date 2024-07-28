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
      heading: "About Prometeo x SAA",
      content: "As part of Prometeo x SAA, the event enriches the festival experience by inviting distinguished alumni to participate in engaging panel discussions and seminars. These events bring together tech masters and industry veterans who share their insights and experiences with the current student body. The panel discussions offer valuable perspectives on emerging trends, career paths, and the future of technology, while the seminars provide in-depth knowledge on specific technical subjects.",
    },
    {
      imgUrl: "https://via.placeholder.com/300",
      heading: "The Panel Discussion",
      content: "Prometeo x SAA is a highlight of the tech fest at IIT Jodhpur, where the fusion of current technological trends and alumni expertise creates a dynamic and educational atmosphere. Alumni from various fields return to their alma mater to engage in thought-provoking discussions and seminars, offering a rare opportunity for students to gain first-hand knowledge from those who have made significant strides in the tech industry. These sessions are designed to inspire and guide students, providing them with practical insights and advice that complement their academic pursuits.",
      reverse: true,
    },
    {
      imgUrl: "https://via.placeholder.com/300",
      heading: "How Alumni contribute",
      content: "The collaboration between Prometeo and SAA during the tech fest exemplifies the strength of the IIT Jodhpur community. By integrating alumni expertise into the festival, the event not only celebrates technological advancements but also honors the contributions of its alumni. This unique blend of current innovations and alumni experiences creates a rich learning environment, where students benefit from both cutting-edge tech demonstrations and the seasoned wisdom of past graduates.",
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
