import Image from "next/image";
import React from "react";

const ImmigrationVisa = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 py-4 px-2 mx-auto max-w-screen-xl lg:py-16">
        <div>
          <div className="bg-gray-50 text-center dark:bg-gray-800 text-2xl dark:border-gray-700 rounded-lg p-2 md:p-12 mb-8">
            <a
              href="#"
              className=" text-blue-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
            >
              Countries
            </a>
            <h1 className="text-gray-900  dark:text-white  sm:text-3xl md:text-4xl font-medium mb-2">
              Immigration & Visa are allowed some{" "}
              <br className="hidden md:block" /> Countries
            </h1>
          </div>
          <div className="w-full">
            <Image
              src="/assets/big_map.svg"
              width={1200}
              height={680}
              alt="map"
            />
          </div>
        </div>
        <div>svg</div>
      </section>
    </div>
  );
};

export default ImmigrationVisa;
