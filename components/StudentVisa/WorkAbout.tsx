import Image from "next/image";
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
    heading: "Study Permit",
    description:
      "Unlock academic opportunities abroad with our expertise in securing study permits, ensuring a seamless transition to your chosen institution.",
  },
  {
    logoUrl: "/assets/search_market.svg",
    title: "ANOTHER TITLE",
    heading: "Work-Study Visa",
    description:
      "Balancing education and work? Discover the flexibility of work-study visas, opening doors to practical experiences alongside academics.",
  },
  {
    logoUrl: "/assets/bulb_dollar.svg",
    title: "STRATEGY",
    heading: "Exchange Program Visa",
    description:
      "Enter on an enriching exchange program with our guidance, fostering cultural exchange and expanding your global perspective.",
  },
  {
    logoUrl: "/assets/search_market.svg",
    title: "STRATEGY",
    heading: "Research Visa",
    description:
      "Dive into the realm of research with a specialized visa, amplifying your academic pursuits and contributing to global knowledge.",
  },
  // Add more card data as needed
];

const WorkAbout: React.FC = () => {
  return (
    <section className="bg-center p-0 sm:p-8 lg:p-32 bg-companyFeature   dark:bg-gray-900">
      <div className="mx-4">
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2000"
          className="text-lg text-center text-white"
        >
          Explore Your Student Visa Options
        </p>
        <h4
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2000"
          className="text-2xl text-center text-white font-bold  mb-4"
        >
          Find the Perfect Fit for Your Educational Pursuits
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
          {cardData.map((feature, index) => (
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1400"
              key={index}
              className="bg-white p-4 w-full md:w-4/5 rounded-lg shadow-lg mt-4 "
            >
              <Image
                src={feature.logoUrl}
                alt="mechanic"
                width={48} // Set your desired width here
                height={48} // Set your desired height here
                className="rounded-full my-3"
              />
              <h4 className="text-xl text-black font-semibold my-2">
                {feature.heading}
              </h4>
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
