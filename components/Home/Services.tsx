import Image from "next/image";
import React from "react";

interface serviceDetails {
  img: string;
  title: string;
  content: string;
}

const services: serviceDetails[] = [
  {
    img: "/assets/servicesIcons/one.svg",
    title: "Web Development",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "/assets/servicesIcons/one.svg",
    title: "Web Development",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "/assets/servicesIcons/one.svg",
    title: "Web Development",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Services = () => {
  return (
    <div className="border border-darkBlue h-[900px] relative ">
      <BgShape />
      <div className="py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 ">
        <h2 className="heading3 mb-6 font-medium ">Service</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            {services.map((service: serviceDetails, index: number) => (
              <ServiceCard key={index} details={service} />
            ))}
          </div>
          <div className="bg-boy bg-cover bg-no-repeat"></div>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.Accelerate critical development work,
            eliminate toil, and deploy changes with ease, with a complete audit
            trail for every change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

const BgShape = () => {
  return (
    <>
      <div className=" z-[-3] w-52 h-52 absolute rounded-full bg-red-500 blur"></div>
      <div className=" z-[-3] w-40 h-40 absolute rounded-full right-0 top-[30%] bg-red-500 blur"></div>
      <div className=" z-[-3] w-40 h-40 absolute rounded-full top-[80%]  bg-blue-500 blur"></div>
    </>
  );
};

interface ServicesCardProps {
  key: number;
  details: serviceDetails; // Assuming CardDetail is your interface for the card details
}

const ServiceCard: React.FC<ServicesCardProps> = ({ key, details }) => {
  return (
    <div key={`service_${key}`} className="max-w-sm p-2 mb-4 rounded-lg  ">
      <div className="flex gap-3 items-center ">
        <div className="bg-white rounded-lg shadow-md p-3 m-3">
          <Image
            width={60}
            height={60}
            src={details.img}
            alt={`service_img_${key}`}
          />
        </div>
        <a href="#">
          <h5 className=" text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {details.title}
          </h5>
        </a>
      </div>
      <p className="mb-3 px-2 font-normal text-gray-500 dark:text-gray-400">
        {details.content}
      </p>
    </div>
  );
};
