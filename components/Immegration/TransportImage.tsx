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

const TransportImage = () => {
  return (
    <section className="bg-center p-0 sm:p-8 w-full lg:p-32 h-[95vh] bg-no-repeat bg-ImmegrationBanner flex flex-col justify-center lg:items-start lg:justify-start dark:bg-gray-900">
      <div className="py-8 w-[100%] md:w-[90%] lg:w-[70%] px-4 mx-auto-e max-w-screen-xl lg:py-16">
        <div className=" dark:bg-gray-800  border-gray-200 dark:border-gray-700 rounded-lg py-2 md:py-12 mb-2">
            <p>Warehouse Transportation
New Zealand Immigration Consultants
</p>
          <h1 className="text-white   dark:text-white text-4xl md:text-5xl lg:text-6xl  font-medium mb-2">
          New Zealand Immigration Consultants

          </h1>

        
        </div>
      </div>
     
    </section>
  );
};

export default TransportImage;
