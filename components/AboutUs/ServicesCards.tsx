import React from "react";

interface ServiceCardProps {
  logoUrl: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  logoUrl,
  title,
  description,
}) => {
  return (
    
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:bg-[#0E0146] hover:text-white transition duration-300 ease-in-out">
      <div className="flex items-center p-4">
        <img src={logoUrl} alt={title} className="w-12 h-12 bg-[#F4EBFF] p-2 rounded-lg" />
        <h2 className="text-xl font-semibold text-gray-700 group-hover:text-white ml-8">
          {title}
        </h2>
      </div>
      <p className="text-gray-400 p-4 group-hover:text-white">{description}</p>
      <a
        href="#"
        className="border btn-primary inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-md my-4 ml-8"
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
  );
};

const ServiceCards: React.FC = () => {
  // Define an array of service data
  const services: ServiceCardProps[] = [
    {
      logoUrl: "/assets/consulation.svg",
      title: "Consultation",
      description:
        "Canada is a country of plentiful opportunities. Education in Canada opens your door to a brilliant future",
    },
    {
      logoUrl: "/assets/consulation.svg",
      title: "Consultation",
      description:
        "Canada is a country of plentiful opportunities. Education in Canada opens your door to a brilliant future",
    },

    {
      logoUrl: "/assets/consulation.svg",
      title: "Consultation",
      description:
        "Canada is a country of plentiful opportunities. Education in Canada opens your door to a brilliant future",
    },

    {
      logoUrl: "/assets/consulation.svg",
      title: "Consultation",
      description:
        "Canada is a country of plentiful opportunities. Education in Canada opens your door to a brilliant future",
    },

    {
      logoUrl: "/assets/consulation.svg",
      title: "Consultation",
      description:
        "Canada is a country of plentiful opportunities. Education in Canada opens your door to a brilliant future",
    },

    {
      logoUrl: "/assets/consulation.svg",
      title: "Consultation",
      description:
        "Canada is a country of plentiful opportunities. Education in Canada opens your door to a brilliant future",
    },

    // Repeat this structure for additional service cards
  ];

  return (
    <>
        <section className="bg-center p-0 sm:p-8  lg:p-32 bg-no-repeat bg-heroBannerOne flex flex-col justify-center lg:items-start lg:justify-start dark:bg-gray-900">
<div className="container mx-auto text-center" >

    <h1 className=" heading1 text-white ">Our Services</h1>
</div>
    <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
    </section>
    </>

  );
};

export default ServiceCards;
