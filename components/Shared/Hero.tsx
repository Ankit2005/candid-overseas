import Image from "next/image";
import React from "react";

const flags = [
  "/assets/flags/flag_one.svg",
  "/assets/flags/flag_two.svg",
  "/assets/flags/flag_three.svg",
  "/assets/flags/flag_four.svg",
  "/assets/flags/flag_five.svg",
  "/assets/flags/flag_six.svg",
];

const Hero = ({ title }: any) => {
  return (
    <section className="bg-center p-0 sm:p-8  lg:p-32 h-[100vh] bg-no-repeat bg-heroBannerOne flex flex-col justify-center lg:items-start lg:justify-start dark:bg-gray-900">
      <div className="py-8 w-[100%] md:w-[90%] lg:w-[70%] px-4 mx-auto-e max-w-screen-xl lg:py-16">
        <div className=" dark:bg-gray-800  border-gray-200 dark:border-gray-700 rounded-lg py-2 md:py-12 mb-2">
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className="text-white   dark:text-white text-4xl md:text-5xl lg:text-6xl  font-medium mb-2"
          >
            {title}
          </h1>

          <a
            href="#"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="3000"
            className="border btn-primary inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-full mt-4"
          >
            Book Consultation
          </a>
        </div>
      </div>
      <div className=" flex px-4 gap-8">
        {flags.map((flag, index) => (
          <div
            key={`flag_${index}`}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration={index * 400}
            className=" rounded-full overflow-hidden w-16 h-16 "
          >
            <Image src={flag} width="100" height={100} alt={`flag_${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
