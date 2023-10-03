import React from "react";

interface CardData {
  logoUrl: string;
  title: string;
  heading: string;
  description: string;
}

const cardData: CardData[] = [
  {
    logoUrl: "/assets/bulb_dollar.svg",
    title: "STRATEGY",
    heading: "Student Visa",
    description:
      "Companies bring in consultants when they have problems they can’t solve on challenge.",
  },
  {
    logoUrl: "/assets/search_market.svg",
    title: "ANOTHER TITLE",
    heading: "Visitor Visa",
    description:
      "Another description for this card. You can add more card data as needed.",
  },
  {
    logoUrl: "/assets/bulb_dollar.svg",
    title: "STRATEGY",
    heading: "Dependent Visa",
    description:
      "Companies bring in consultants when they have problems they can’t solve on challenge.",
  },

  {
    logoUrl: "/assets/search_market.svg",
    title: "STRATEGY",
    heading: "Immigrant Visa",
    description:
      "Companies bring in consultants when they have problems they can’t solve on challenge.",
  },

  // Add more card data as needed
];

const WorkAbout: React.FC = () => {
  return (
<section className="bg-center p-0 sm:p-8 lg:p-32 bg-companyFeature   dark:bg-gray-900">
      <div className="mx-4">
        <p className="text-lg text-center text-white">We believe scaling start-ups require a radically different kind of agency</p>
        <h4 className="text-2xl text-center text-white font-bold  mb-4">I Want Company Feature</h4>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
  {cardData.map((feature, index) => (
    <div key={index} className="bg-white p-4 w-full md:w-4/5 rounded-lg shadow-lg mt-4 ">
      <img src={feature.logoUrl} alt="mechanic" className="w-12 h-12 rounded-full my-3" />
      <h4 className="text-xl text-black font-semibold my-2">{feature.heading}</h4>
      <ul className="list-disc text-secondaryText ml-4">
        <li>{feature.description}</li>
      </ul>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default WorkAbout;
