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
        "A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate, and track campaigns - no coding required.",
    },
    {
      logoUrl: "/assets/our_mission.svg",
      title: "Our Mission",
      description:
        "A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate, and track campaigns - no coding required.",
    },
    {
      logoUrl: "/assets/our_value.svg",
      title: "Our Value",
      description:
        "A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate, and track campaigns - no coding required.",
    },
  ];

  return (
    <div className="bg-lightRed text-gray-800 py-12">
      <div className="container mx-auto text-center">
        <h1 data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000" className="heading1 text-3xl font-semibold">
          I want company feature
        </h1>
        <p data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000" className="text-gray-600 mt-2">
          We believe scaling startups require a radically different kind of
          agency
        </p>
      </div>

      <div  className="container mx-auto mt-12  flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        {features.map((feature, index) => (
          <div  data-aos="zoom-in"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1400" 
            key={index}
            className="group w-full md:w-2/3 bg-white   transition duration-300 ease-in-out transform  rounded-lg overflow-hidden shadow-md flex flex-col  p-4"
          >
            <Image  data-aos="zoom-in"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1400"
  src={feature.logoUrl}
  alt={feature.title}
  width={64} // Set your desired width here
  height={64} // Set your desired height here
  className="mb-4 bg-[#689eee] p-2 rounded-xl"
/>

          
            <h2 className="text-xl font-semibold text-gray-800 ">
              {feature.title}
            </h2>
            <p className="text-gray-700   mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyFeatures;
