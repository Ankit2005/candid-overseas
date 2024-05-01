import Image from "next/image";
import React from "react";

const immigrationContent = [
  {
    heading:
      "Welcome to Your Immigration Journey with Candid Overseas Where Your Success is Our Passion",
    description:
      "Embark on your immigration journey with confidence, guided by the experienced team at Candid Overseas. Our mission is simple: to make your immigration dreams a reality. With our expert assistance and personalized approach, navigating the complexities of immigration has never been easier.",
  },
  {
    heading: "Why Choose Candid Overseas ?",
    points: [
      {
        title: "Expertise and Experience",
        description:
          "Candid Overseas brings years of expertise and a wealth of experience in immigration services. Our dedicated team understands the intricacies of immigration processes, ensuring smooth and efficient navigation for our clients.",
      },
      {
        title: "Tailored Solutions",
        description:
          "At Candid Overseas, we recognize that each individual's immigration journey is unique. That's why we offer personalized solutions tailored to your specific needs and aspirations. Whether you're pursuing skilled migration, study visas, family sponsorship, or citizenship, we have the knowledge and resources to assist you every step of the way.",
      },
      {
        title: "Comprehensive Guidance",
        description:
          "Navigating immigration procedures can be overwhelming, but with Candid Overseas by your side, you'll never be alone. From initial consultations to document preparation, submission, and beyond, we provide comprehensive guidance to ensure a seamless experience.",
      },
      {
        title: "Timely and Efficient Service",
        description:
          "Your time is valuable, and we understand the importance of efficiency in the immigration process. With Candid Overseas, you can expect timely and efficient service, minimizing delays and maximizing your chances of success.",
      },
    ],
  },
  {
    heading: "Your Success is Our Passion",
    description:
      "At Candid Overseas, your success is not just a goal – it's our passion. We take pride in being part of your immigration journey and are committed to empowering you to thrive in your new homeland. With Candid Overseas, you can trust that your dreams are in capable hands.",
  },
  {
    heading: "Ready to Begin Your Immigration Journey?",
    description:
      "Take the first step towards a brighter future today. Contact Candid Overseas to schedule a consultation and discover how we can help make your immigration aspirations a reality.",
  },
];

const Consultant: React.FC = () => {
  return (
    <div className="bg-lightRed text-secondaryText">
      <ImmigrationPage />
      <div className="container mx-auto p-4 flex flex-col-reverse md:flex-row items-center justify-center">
        {/* Left side - Image */}
        <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 relative group">
          <Image
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1400"
            src="/assets/consultant_image.svg"
            alt="Your Image"
            width={100}
            height={100}
            objectFit="cover" // You can choose a different objectFit value if needed
            className="w-full h-full"
          />
        </div>

        {/* Right side - Heading and Paragraphs */}
        <div className="md:w-1/2">
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className="text-3xl font-bold mb-4"
          >
            Canada Immigration Consultation
          </h1>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className="text-lg text-grey-300 text-justify mb-4"
          >
            Start a seamless journey to Canada with our specialized immigration
            consultation services. Our seasoned consultants guide you through
            the best Canadian immigration process, ensuring every step is
            tailored to your unique profile. Whether you aspire for permanent
            residency, work permits, or study visas, we pave the way for your
            successful Canadian dream.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consultant;

const ImmigrationPage = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              {immigrationContent[0].heading}
            </h2>
            <p className="text-lg text-gray-800 mb-6 text-justify">
              {immigrationContent[0].description}
            </p>
            <h3 className="text-2xl font-semibold mb-2">
              {immigrationContent[1].heading}
            </h3>
            <ul className="list-disc ml-6 mb-6">
              {/* Wrap the map function in a parent element */}
              {immigrationContent[1]?.points &&
                immigrationContent[1]?.points.map((point, index) => (
                  <li key={index} className="text-gray-800 my-4 text-justify ">
                    <span className="font-semibold">{point.title}: </span>
                    {point.description}
                  </li>
                ))}
            </ul>
            <p className="text-lg text-gray-800 mb-8 text-justify">
              {immigrationContent[2].description}
            </p>
          </div>
          <div className="hidden lg:block">
            <img
              src={"/assets/trust.jpg"}
              alt="Consultant"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
