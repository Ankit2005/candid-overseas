import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  logoUrl: string;
  title: string;
  description: string;
}

const CompanyFeatures: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      logoUrl: "/assets/our_vision.svg",
      title: "Our Vision",
      description:
        "Empower Indian students with the global education consultation they need, fostering a community of ambitious individuals prepared to thrive on the world stage.",
    },
    {
      logoUrl: "/assets/our_mission.svg",
      title: "Our Mission",
      description:
        "Guide aspiring students, leading them to academic success on an international scale, and becoming the go-to consultancy for unlocking the doors to global educational opportunities.",
    },
    {
      logoUrl: "/assets/our_value.svg",
      title: "Our Value",
      description:
        "Grounded in integrity, transparency, and excellence, our values are the foundation of Candid - Study Abroad Consultants, guaranteeing dedicated commitment to the success and satisfaction of our students in every service we provide.",
    },
  ];

  return (
    <div className="bg-lightRed text-gray-800 py-12">
      <div className="container mx-auto text-center">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1000"
          className="heading1 text-3xl font-semibold"
        >
          Crafting Our Mission, Vision, and Values A Blueprint for Excellence
        </h1>
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1200"
          className="text-gray-600 mt-2"
        >
          Unlocking Global Opportunities
        </p>
      </div>

      <div className="container mx-auto mt-12  flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration={index * 300}
            className="group w-full md:w-2/3 bg-white hover:bg-red-500 group-hover:text-white transition duration-300 ease-in-out transform hover:scale-105 rounded-lg overflow-hidden shadow-md flex flex-col items-center p-4"
          >
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1400"
              src={feature.logoUrl}
              alt={feature.title}
              width={64} // Set your desired width here
              height={64} // Set your desired height here
              className="mb-4"
            />

            <h2
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1400"
              className="text-xl font-semibold text-gray-800 group-hover:text-white"
            >
              {feature.title}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1400"
              className="text-gray-700 group-hover:text-white text-center mt-2"
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyFeatures;
