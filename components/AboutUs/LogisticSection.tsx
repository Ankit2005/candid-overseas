import Image from "next/image";
import React from "react";

const LogisticsSection: React.FC = () => {
  const lists = [
    {
      img: "/assets/cube.svg",
      title: "Personalized Guidance",
    },
    {
      img: "/assets/ticket.svg",
      title: "Global Network",
    },
    {
      img: "/assets/cube.svg",
      title: "Expert Counselors",
    },
    {
      img: "/assets/ticket.svg",
      title: "Proven track record of visa success",
    },
  ];
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
              Candid Your Trusted Guide to Global Education Success
            </h1>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="2000"
              className="text-gray-600 mt-4"
            >
              Candid is a premier study abroad consultant, we are your trusted
              companions in the pursuit of global education. With a passion for
              shaping dreams and a commitment to excellence, we stand as
              pioneers in guiding Indian students towards international
              educational opportunities. Our unparalleled expertise and
              personalized approach set us apart, ensuring every aspirant's path
              to success is smooth and rewarding.
            </p>

            {lists.map((item, index) => (
              <div key={`line_${index}`} className="flex items-center mt-6">
                <Image
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="1000"
                  src={item?.img}
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
                  {item?.title}
                </p>
              </div>
            ))}
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
        <div className="p-4 text-center flex space-x-2">
          <h2 className="text-3xl text-gray-600 font-semibold">200+</h2>
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
