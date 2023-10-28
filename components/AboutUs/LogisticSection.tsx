import Image from "next/image";
import React from "react";

const LogisticsSection: React.FC = () => {
  return (
    <>
      <div>
        <div className="container mx-auto py-8 flex flex-col md:flex-row items-center">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 p-6">
            <h1
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="2000"
              className="text-3xl font-semibold text-gray-800"
            >
              We provide full range global logistics solution
            </h1>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="2000"
              className="text-gray-600 mt-4"
            >
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="2000"
              className="text-gray-600 mt-4"
            >
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
            <div className="flex items-center mt-6">
              <Image
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1000"
                src="/assets/cube.svg"
                alt="cube"
                width={40} // Set your desired width here
                height={40} // Set your desired height here
                className="rounded-md"
              />

              <p
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1000"
                className="ml-2 text-[#211F20] font-bold text-xl"
              >
                Delivery on Time
              </p>
            </div>
            <div className="flex items-center mt-6">
              <Image
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1200"
                src="/assets/ticket.svg"
                alt="cube"
                width={40} // Set your desired width here
                height={40} // Set your desired height here
                className="rounded-md"
              />

              <p
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1200"
                className="ml-2 text-[#211F20] font-bold text-xl"
              >
                Optimized Travel Cost
              </p>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 p-6 relative ">
            <Image
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1400"
              src="/assets/aeroplane.svg"
              alt="Logistics Image"
              layout="responsive"
              width={500} // Set your desired width here
              height={300} // Set your desired height here
              className="rounded-md"
            />
            <div className="md:w-2/3 lg:w-1/2 p-6 hidden md:block absolute md:top-[9.5rem] lg:top-[17rem] xl:top-[21rem] lg:bg-white md:-left-[20px] lg:-left-[100px]">
              <Image
                data-aos="zoom-in"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1400"
                src="/assets/people_box.svg"
                alt="Logistics Image"
                layout="responsive"
                width={500} // Set your desired width here
                height={300} // Set your desired height here
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-0 w-full md:w-1/2 flex flex-col md:flex-row justify-evenly px-10 md:px-0 space-x-0 md:space-x-10">
        <div className=" p-4 text-center flex space-x-2">
          <h2 className="text-3xl text-gray-600 font-semibold">1294</h2>
          <Image
            src="/assets/square.svg"
            alt="cube"
            width={16} // Set your desired width here
            height={28} // Set your desired height here
            className="rounded-md"
          />

          <p className="text-gray-600 mt-[2px]">Delivered Packages</p>
        </div>
        <div className="p-4 text-center flex space-x-2">
          <h2 className="text-3xl text-gray-600 font-semibold">3594</h2>
          <Image
            src="/assets/square.svg"
            alt="cube"
            width={16} // Set your desired width here
            height={28} // Set your desired height here
            className="rounded-md"
          />

          <p className="text-gray-600 mt-[2px]">Satisfied Clients</p>
        </div>
      </div>
    </>
  );
};

export default LogisticsSection;
