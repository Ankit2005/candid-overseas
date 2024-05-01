import Image from "next/image";

interface FeatureCardProps {
  logoUrl: string;
  title: string;
  description: string;
}
const YourThrees: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      logoUrl: "/assets/trade.svg",
      title: "Comprehensive Curriculum",
      description:
        "Our PTE coaching includes speaking, writing, reading, and listening, tailored for Indian students aiming to succeed in global universities.",
    },
    {
      logoUrl: "/assets/bulb_dollar.svg",
      title: "Personalized Coaching",
      description:
        "Get personalized attention from our experts who understand the unique challenges students face, ensuring targeted guidance for PTE success.",
    },
    {
      logoUrl: "/assets/serach.svg",
      title: "Realistic Practice Tests",
      description:
        "Sharpen your skills with our realistic PTE practice tests, mirroring exam conditions, to build confidence and readiness for the actual test day.",
    },
  ];

  return (
    <>
      <div className=" text-gray-800 py-12">
        <div className="container mx-auto text-center">
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className="text-lightPurple font-semibold"
          >
            Value Propositions
          </h1>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className=" text-secondaryText font-bold text-3xl mt-2"
          >
            Improve your PTE scores with our excellent coaching
          </p>
        </div>

        <div className="container mx-auto mt-12  flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
          {features.map((feature, index) => (
            <div
              data-aos="zoom-in"
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
    </>
  );
};
export default YourThrees;
