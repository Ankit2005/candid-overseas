import Image from "next/image";
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
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="1200"
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:bg-[#0E0146] hover:text-white transition duration-300 ease-in-out"
    >
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000"
        className="flex items-center p-4"
      >
        <Image
          src={logoUrl}
          alt={title}
          width={48} // Set your desired width here
          height={48} // Set your desired height here
          className="bg-[#F4EBFF] p-2 rounded-lg"
        />

        <h2 className="text-xl font-semibold text-gray-700 group-hover:text-white ml-8">
          {title}
        </h2>
      </div>
      <p
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1200"
        className="text-gray-400 p-4 group-hover:text-white"
      >
        {description}
      </p>
      {/* <a
        href="#"
        className="border btn-primary inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-md my-4 ml-8"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1400"
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
      </a> */}
    </div>
  );
};

const ServiceCards: React.FC = () => {
  // Define an array of service data

  const services: ServiceCardProps[] = [
    {
      logoUrl: "/assets/consulation.svg",
      title: "Student Visa",
      description:
        "Embark on your academic journey with expert guidance for seamless student visa solutions.",
    },
    {
      logoUrl: "/assets/consulation.svg",
      title: "Work Visa",
      description:
        "Elevate your career prospects with personalized assistance for navigating work visa opportunities.",
    },
    {
      logoUrl: "/assets/consulation.svg",
      title: "Permanent Residency",
      description:
        "Establish enduring connections with your dream destination through our tailored permanent residency services.",
    },
    {
      logoUrl: "/assets/consulation.svg",
      title: "Business Visa",
      description:
        "Transform your entrepreneurial dreams into global success with our strategic business visa guidance.",
    },
    {
      logoUrl: "/assets/consulation.svg",
      title: "Investor Visa",
      description:
        "Navigate the migration landscape seamlessly with our expert guidance on investor visas.",
    },
    {
      logoUrl: "/assets/consulation.svg",
      title: "IELTS/PTE Coaching",
      description:
        "Master the art of language proficiency with personalized coaching for IELTS/PTE success.",
    },
    {
      logoUrl: "/assets/consulation.svg",
      title: "Course Counseling",
      description:
        "Explore a diverse range of courses tailored to your aspirations through expert counseling services.",
    },
    {
      logoUrl: "/assets/consulation.svg",
      title: "Scholarship Counseling",
      description:
        "Unlock financial scholarship opportunities and pave the way for a rewarding academic journey.",
    },
    // Repeat this structure for additional service cards
  ];

  return (
    <>
      <section className="bg-center p-0 sm:p-8  lg:p-32 bg-no-repeat bg-heroBannerOne flex flex-col justify-center lg:items-start lg:justify-start dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1200"
            className=" heading1 text-white "
          >
            Our Services
          </h1>
        </div>
        <div
          // data-aos="fade-up"
          // data-aos-anchor-placement="bottom-bottom"
          // data-aos-duration="1400"
          className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceCards;
