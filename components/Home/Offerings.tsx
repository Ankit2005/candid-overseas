import Image from "next/image";
import React from "react";

interface offeringDetails {
  img: string;
  label: string;
  title: string;
  content: string;
  btnTxt: string;
  btnLink: string;
}

const OfferingsArr: offeringDetails[] = [
  {
    img: "/assets/blub_and_map.svg",
    label: "Research & Discovery 🧐",
    title: "Explore 50,000+ expert articles and university profiles",
    content:
      "Dive into a world of diverse destinations, prestigious universities, and exciting courses",
    btnTxt: "Research with Wings",
    btnLink: "/",
  },
  {
    img: "/assets/offering_img_2.svg",
    label: "Shortlisting ✅",
    title: "Find your Right-Fit Universities and Courses",
    content:
      "Share your profile, and let our tools recommend the best-matched universities and courses for you",
    btnTxt: "Try AI University Course Finder",
    btnLink: "/",
  },
  {
    img: "/assets/offering_img_3.svg",
    label: "Shortlisting ✅",
    title: "Find your Right-Fit Universities and Courses",
    content:
      "Share your academic background, and allow our tools to curate personalized suggestions for universities and courses that perfectly align with your aspirations.",
    btnTxt: "Try AI University Course Finder",
    btnLink: "/",
  },
  {
    img: "/assets/offering_img_4.svg",
    label: "University Shortlisting ✅",
    title:
      "Discover Tailored Recommendations for Your Ideal Universities and Courses",
    content:
      "Effortlessly find your perfect fit by sharing your profile. Our advanced tools will expertly recommend universities and courses that align seamlessly with your academic goals.",
    btnTxt: "Explore with AI University Course Finder",
    btnLink: "/",
  },
  {
    img: "/assets/offering_img_5.svg",
    label: "University Shortlisting ✅",
    title:
      "Explore Tailored Recommendations for Your Perfect Universities and Courses",
    content:
      "Leverage our AI-driven tools by sharing your profile, and receive personalized recommendations for the best-matched universities and courses that align with your academic journey.",
    btnTxt: "Discover Now with AI University Course Finder",
    btnLink: "/",
  },
];

const Offerings = () => {
  return (
    <div>
      <section className="bg-white mt-20 border md:mt-0 dark:bg-gray-900 py-2 mx-auto max-w-screen-xl lg:py-16">
        <div>
          <div className="bg-gray-50 dark:bg-gray-800  dark:border-gray-700 rounded-lg p-3 md:p-2 mb-2">
            <a
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="500"
              href="#"
              className=" text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
            >
              Offerings
            </a>
            <h1
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="800"
              className="text-gray-900 dark:text-white text-2xl md:text-5xl font-medium mb-2"
            >
              For all your study abroad needs
            </h1>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              className=" md:text-2xl text-xl font-normal text-gray-500 dark:text-gray-400 mb-6"
            >
              WooCommerce is a customizable, open-source eCommerce platform
              built on WordPress. Get started quickly and make your way.
            </p>
          </div>
        </div>
        <div>
          {OfferingsArr.map((item: offeringDetails, index: number) => (
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <OfferingCard key={index} details={item} index={index} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Offerings;

interface OfferingCardProps {
  key: number;
  details: offeringDetails; // Assuming CardDetail is your interface for the card details
  index: number;
}

const OfferingCard: React.FC<OfferingCardProps> = ({ key, details, index }) => {
  return (
    <div
      key={`offering_card_${key}`}
      className={`px-2 md:px-10 flex col-flex  items-center justify-between ${
        index % 2 === 1 ? "md:flex-row-reverse " : "md:flex-row"
      } `}
    >
      <div
        className="w-full mx-auto"
        data-aos="fade-up"
        // data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="600"
      >
        <Image
          width={540}
          height={540}
          src={details.img}
          alt={`${details.label}`}
        />
      </div>
      <div className=" hidden md:block mx-auto">
        <Image
          width={70}
          height={70}
          src="/assets/thread.svg"
          alt={`${details.label}_thread`}
        />
      </div>
      <div className="w-full ">
        <div className=" mx-auto max-w-screen-xl ">
          <div className="bg-gray-50 dark:bg-gray-800  dark:border-gray-700 rounded-lg p-9 md:mb-8">
            <a
              href="#"
              data-aos="fade-up"
              // data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="800"
              className=" text-blue-800 text-sm font-medium inline-flex items-center  rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
            >
              {details.label}
            </a>
            <h4
              data-aos="fade-up"
              data-aos-duration="1000"
              className="heading4  text-gray-900 dark:text-white text-xl md:text-3xl font-normal mb-2"
            >
              {details.title}
            </h4>
            <p
              data-aos="fade-up"
              data-aos-duration="1200"
              className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6"
            >
              {details.content}
            </p>
            <button
              type="button"
              data-aos="fade-up"
              data-aos-duration="1400"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {details.btnTxt}
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
