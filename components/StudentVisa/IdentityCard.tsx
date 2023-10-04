import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  logoUrl: string;
  title: string;
  description: string;
}

const IdentityCard: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      logoUrl: "/assets/trade.svg",
      title: "Career",
      description:
        "World-class & reliable psychometric assessment + personalized counselling to help you identify the right fit career.",
    },
    {
      logoUrl: "/assets/bulb_dollar.svg ",
      title: "Country",
      description:
        "Our personalized assessment of your needs & demographic fitment helps you identify the right Country. Remember, every student has a preferred study destination.",
    },
    {
      logoUrl: "/assets/serach.svg",
      title: "College",
      description:
        "What are the best colleges/university for you? Select universities in order of aspirations, realistic choices and alternative options. Get customized lists as per your plan. ",
    },
  ];

  return (
    <div className=" text-gray-800 py-12">
      <div className="container mx-auto text-center">
        <h1  data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000" className="text-lightPurple font-semibold">
        Our Facilities
        </h1>
        <p  data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000" className=" text-secondaryText font-bold text-3xl mt-2">
        Identify your 3Cs.
          agency
        </p>
      </div>

      <div className="container mx-auto mt-12  flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        {features.map((feature, index) => (
          <div   data-aos="zoom-in"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1400"
            key={index}
            className="group w-full md:w-2/3 bg-[#E3F3FF]   transition duration-300 ease-in-out transform  rounded-lg overflow-hidden shadow-md flex flex-col items-center p-4"
          >
           <Image
  src={feature.logoUrl}
  alt={feature.title}
  width={64} // Set your desired width here
  height={64} // Set your desired height here
  className="mb-4"
/>

            <h2 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h2>
            <p className="text-gray-700  text-center mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdentityCard;
