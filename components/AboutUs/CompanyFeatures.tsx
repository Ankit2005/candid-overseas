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
      logoUrl: "/assets/our_mission.svg ",
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
        <h1 className="heading1 text-3xl font-semibold">
          I want company feature
        </h1>
        <p className="text-gray-600 mt-2">
          We believe scaling startups require a radically different kind of
          agency
        </p>
      </div>

      <div className="container mx-auto mt-12 hover:text-white flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white hover:bg-red-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 rounded-lg overflow-hidden shadow-md flex flex-col items-center p-4"
          >
            <img
              src={feature.logoUrl}
              alt={feature.title}
              className="w-16 h-16 mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              {feature.title}
            </h2>
            <p className="text-gray-700 hover:text-white text-center mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyFeatures;
