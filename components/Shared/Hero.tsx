import Image from "next/image";
import React from "react";

const flags = [
  "/assets/flags/flag_one.svg",
  "/assets/flags/flag_one.svg",
  "/assets/flags/flag_one.svg",
  "/assets/flags/flag_one.svg",
  "/assets/flags/flag_one.svg",
  "/assets/flags/flag_one.svg",
  "/assets/flags/flag_one.svg",
];

const Hero = () => {
  return (
    <section className="bg-center p-0 sm:p-8  lg:p-32 h-[95vh] bg-no-repeat bg-ourServicesImg flex flex-col justify-center lg:items-start lg:justify-start dark:bg-gray-900">
      <div className="py-8 w-[100%] md:w-[90%] lg:w-[70%] px-4 mx-auto-e max-w-screen-xl lg:py-16">
        <div className=" dark:bg-gray-800  border-gray-200 dark:border-gray-700 rounded-lg py-2 md:py-12 mb-2">
          <h1 className="text-white   dark:text-white text-4xl md:text-5xl lg:text-6xl  font-medium mb-2">
            Building exactly the eCommerce <br /> website you want.
          </h1>

          <a
            href="#"
            className="border btn-primary inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-full mt-4"
          >
            Start a New Store
          </a>
        </div>
      </div>
      <div className=" flex px-4 gap-2">
        {flags.map((flag, index) => (
          <div key={`flag_${index}`} className=" rounded-full w-16 h-16 ">
            <Image src={flag} width="100" height={100} alt={`flag_${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
