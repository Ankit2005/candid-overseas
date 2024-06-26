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
    logoUrl: "/assets/bulb.svg",
    title: "",
    heading: "Individualized EPT Preparation Plans",
    description:
      "Crafted to suit your unique strengths and areas for improvement.",
  },
  {
    logoUrl: "/assets/bulb.svg",
    title: "",
    heading: "Mock Tests and Practice Sessions",
    description: "Sharpen your skills through simulated EPT experiences.",
  },
  {
    logoUrl: "/assets/bulb.svg",
    title: "",
    heading: "Personalized Feedback",
    description:
      "Receive insightful assessments to enhance your language proficiency.",
  },

  {
    logoUrl: "/assets/bulb.svg",
    title: "",
    heading: "Tips and Strategies",
    description:
      "Gain a competitive edge with expert guidance for each section of the EPT.",
  },

  // Add more card data as needed
];

const GetBenefit: React.FC = () => {
  return (
    <div className="bg-lightRed">
      <div className="container  py-4 pt-8 grid grid-cols-1 md:grid-cols-2">
        {/* Right side section */}
        <div className=" rounded-lg  p-6 mx-auto md:w-2/ lg:w-auto ">
          {/* Heading */}
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className="text-3xl text-secondaryText font-bold mb-4"
          >
            EPT Test Consultation Services
          </h1>

          {/* Paragraph */}
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className="text-grey-300 leading-9"
          >
            Maximizing Scores and Confidence through EPT Test Consultation
            Services. Explore various EPT services offered by Candid - Your
            partner for the EPT journey.
          </p>

          <a
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            href="#"
            className="border btn-primary inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-md my-10 "
          >
            Learn more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>

        {/* Left side section */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {/* Map over the cardData array to generate cards */}
          {cardData.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration={index * 400}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="bg-white mx-auto max-w-md">
                <div className="flex justify-between">
                  {/* Left Side (Icon) */}
                  <div className="w-1/6">
                    <Image
                      src={card.logoUrl}
                      alt={card.title}
                      width={32} // Set your desired width here
                      height={32} // Set your desired height here
                      className="mb-4"
                    />
                  </div>

                  {/* Right Side (Heading) */}
                  <div className="pl-4">
                    <p className="text-lg text-blue font-semibold">
                      {card.title}
                    </p>
                  </div>
                </div>
              </div>
              {/* Divider */}
              <hr className="my-4 border-gray-300" />

              <div className="my-2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.heading}
                </h5>

                <p className="mb-3 font-normal text-grey-300 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetBenefit;
