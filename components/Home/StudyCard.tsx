import Image from "next/image";
import React from "react";

const studyCards = [
  {
    img: "/assets/study_card_one.svg",
    title: "Study Visa",
    content:
      "Seamlessly navigate the complex world of student visas with our expert guidance.",
    link: "",
  },
  {
    img: "/assets/study_card_three.svg",
    title: "Visit Visa",
    content:
      "Transform your dreams into reality by exploring work opportunities abroad with our dedicated support.",
    link: "",
  },
  {
    img: "/assets/study_card_two.svg",
    title: "IELTS / Training",
    content:
      "Empower your entrepreneurial spirit with our comprehensive guide to securing business visas",
    link: "",
  },
];

const StudyCard = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <a
              href="#"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              className=" text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
            >
              Offerings
            </a>
            <h1
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="2000"
              className="text-gray-900 dark:text-white text-3xl md:text-5xl font-medium mb-2"
            >
              For all your study abroad needs
            </h1>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="2600"
              className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6"
            >
              Explore, dream, and succeed with our expert study abroad
              consultants.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studyCards.map((item, index) => (
              <div
                key={`card_${index}`}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration={index * 900}
                className="e-max-w-sm bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <Image width={700} height={500} src={item.img} alt="img" />

                <div className="p-5">
                  <a
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1200"
                    href="#"
                  >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </a>
                  <p
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1600"
                    className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                  >
                    {item.content}
                  </p>
                  <a
                    href="#"
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="2000"
                    className="border btn-primary inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-md mt-4"
                  >
                    Read more
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyCard;
